# OM Razor

Cut, slice, transform, parts of a web page into [OM](https://github.com/swannodette/om) DOM builders.

In found the process of converting [Bootstrap Themes](http://getbootstrap.com/) (like [SB Admin](http://startbootstrap.com/template-overviews/sb-admin/)) into OM DOM builders to be tedious.

Given the example markup, the process of conversion is largely rote.  This is quick hack to automate the process.

To run the code-generator, place the following script tags into your page:

```html
<script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
<script src="/path/to/om-razor.js"></script>
```

Then open the javascript console and run `OmRazor.domToOm` pasing at a minimum the jQuery selector:

```javascript
OmRazor.domToOm({selector: '.breadcrumb', name: 'breadcrumb'})
```

When run for the SB Admin Theme, that produces:

```clojure
(defn breadcrumb [data owner] 
  (d/ol
    #js {:className  "breadcrumb"}
    " "
    (d/li
      #js {:className  "active"}
      " Dashboard "
      (d/i
        #js {:className  "fa fa-dashboard"}))))
```

