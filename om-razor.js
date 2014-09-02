// n = OmRazor.domToOm('.breadcrumb')
(function (root) {
  var OmRazor = root.OmRazor = {};

  OmRazor.domToOm = function (opts) {
    var selector = opts.selector, elts = $(selector), tree, result = "(defn widget [data owner] \n";
    
    tree = OmRazor.domNodeToTree({
      elt:       elts,
      attrs:     OmRazor.namedNodeMapToObject(elts[0].attributes),
      text:      OmRazor.nodeText(elts),
      children:  []});

    result = OmRazor.treeToWidget(tree, result, '  ') + "\n)\n";

    return result;
  };

  OmRazor.attrsToCljsMap = function (attrs) {
    var pairs = [];
    $.each(attrs, function (key, val) {
      pairs.push(key + ": " + JSON.stringify(val));
    }); 
    return '{' + pairs.join(", ") + '}';
  };

  OmRazor.treeToWidget = function (tree, buf, indent) {
    debugger;
    var node = tree.elt[0], omFn = 'd/' + node.nodeName.toLowerCase();
    buf += indent + "(" + omFn + "\n"
         + indent + "  #js " + OmRazor.attrsToCljsMap(tree.attrs) + "\n";
    if (node.text && node.text.length > 0) {
      buf += indent + "\"" + node.text + "\"\n";
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

  OmRazor.nodeText = function (elt) {
    return elt.contents().filter(function() {
      return this.nodeType == 3;
    }).text();
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
