/*jslint indent: 2 */
/*global $, window*/
// n = OmRazor.domToOm('.breadcrumb')
(function (root) {
  "use strict";
  var OmRazor = root.OmRazor = {};

  OmRazor.domToOm = function (opts) {
    var selector = opts.selector, elts = $(selector), tree, result = "(defn " + (opts.name || 'widget') + " [data owner] \n";

    tree = OmRazor.domNodeToTree({
      elt:       elts,
      attrs:     OmRazor.namedNodeMapToObject(elts[0].attributes),
      text:      OmRazor.nodeText(elts),
      children:  []
    });

    result = OmRazor.treeToWidget(tree, result, '  ') + "\n)\n";

    return OmRazor.cleanupCloseParens(result);
  };

  OmRazor.cleanupCloseParens = function (s) {
    return s.replace(/\s*\n\s*\)/g, ")");
  };


  OmRazor.attrsToCljsMap = function (attrs) {
    var pairs = [];
    $.each(attrs, function (key, val) {
      if (key === "style") {
        pairs.push(":" + key + " #js " + JSON.stringify(
          OmRazor.inlineStyleToMap(val)
        ));
        return;
      }

      if (key === "class") {
        key = "className";
      }

      pairs.push(":" + key + "  " + JSON.stringify(val));
    });
    return '{' + pairs.join(", ") + '}';
  };

  /**
   * NB: this is a 'best effort' simplistic parser.  To correctly parse in-line
   * styles we need to use a full CSS parser. See:
   *
   *   http://stackoverflow.com/questions/3326494/parsing-css-in-javascript-jquery
   *
   * NB: This parser does not handle comments.
   *
   */
  OmRazor.inlineStyleToMap = function (style) {
    var res = {}, parts = style.split(';'), ii, pair;
    for (ii = 0; ii < parts.length; ii += 1) {
      if (parts[ii].length === 0) {
        continue;
      }
      pair = parts[ii].split(':', 2);
      if (!pair || pair.length !== 2) {
        console.log('OmRazor.inlineStyleToMap: unrecognized style: %o', parts[ii]);
        continue;
      }
      res[pair[0].trim()] = pair[1].trim();
    }
    return res;
  };

  OmRazor.treeToWidget = function (tree, buf, indent) {
    var node = tree.elt[0], omFn = 'd/' + node.nodeName.toLowerCase();
    buf += indent + "(" + omFn + "\n"
         + indent + "  #js " + OmRazor.attrsToCljsMap(tree.attrs) + "\n";
    if (tree.text && tree.text.length > 0) {
      buf += indent + "  \"" + tree.text + "\"\n";
    }
    // blows the stakc
    $.each(tree.children, function (idx, n) {
      buf += OmRazor.treeToWidget(n, "", indent + "  ");
    });
    buf += indent + ")\n";
    return buf;
  };

  OmRazor.namedNodeMapToObject = function (attrs) {
    var o = {};
    $.each(attrs, function (idx, n) {
      o[n.name] = n.value;
    });
    return o;
  };

  OmRazor.trimText = function (s) {
    return s.replace(/[\r\n\s]+/g, " ");
  };

  OmRazor.nodeText = function (elt) {
    var text = elt.contents().filter(function () {
      return this.nodeType === 3;
    }).text();
    return OmRazor.trimText(text);
  };

  OmRazor.domNodeToTree = function (node) {
    node.elt.children().each(function (idx, elt) {
      var elts = $(elt), cnode = {
        elt:       elts,
        attrs:     OmRazor.namedNodeMapToObject(elt.attributes),
        text:      OmRazor.nodeText(elts),
        children:  []
      };

      OmRazor.domNodeToTree(cnode);

      node.children.push(cnode);
    });

    return node;
  };

}(window));
