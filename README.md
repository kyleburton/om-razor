# OM Razor

Cut, slice, a web page into [OM](https://github.com/swannodette/om) DOM builders.

In the process of converting a [Bootstrap Theme](http://getbootstrap.com/), [SB Admin](http://startbootstrap.com/template-overviews/sb-admin/), I found the process of converting it into OM DOM builders very tedious.

Given the example markup, the process of conversion is largely rote.  This is quick hack to do just that.


To run the code-generator, place the following script tags into your page:

    <script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
    <script src="/path/to/om-razor.js"></script>

Then open the javascript console and run `OmRazor.domToOm` pasing at a minimum the jQuery selector:

```javascript
OmRazor.domToOm({selector: '.breadcrumb', name: 'breadcrumb'})
```

When run for the SB Admin Theme, that produces:

```clojure
(defn breadcrumb [data owner] 
  (d/ol
    #js {class: "breadcrumb"}
    " "
    (d/li
      #js {class: "active"}
      " Dashboard "
      (d/i
        #js {class: "fa fa-dashboard"}))))
```

