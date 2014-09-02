# OM Razor

Cut, slice, a web page into [OM](https://github.com/swannodette/om) DOM builders.

In the process of converting a [Bootstrap Theme](http://getbootstrap.com/), [SB Admin](http://startbootstrap.com/template-overviews/sb-admin/), I found the process of converting it into OM DOM builders very tedious.

Given the example markup, the process of conversion is largely rote.  This is quick hack to do just that.


To run the code-generator, place the following script tags into your page:

    <script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
    <script src="/path/to/om-razor.js"></script>

Then open the javascript console and run `OmRazor.domToOm` pasing at a minimum the jQuery selector:

    OmRazor.domToOm({selector: '.navbar'})

When run for the SB Admin Theme, that produces:

    (defn widget [data owner] 
      (d/nav
        #js {class: "navbar navbar-inverse navbar-fixed-top", role: "navigation"}
        (d/div
          #js {class: "navbar-header"}
          (d/button
            #js {type: "button", class: "navbar-toggle", data-toggle: "collapse", data-target: ".navbar-ex1-collapse"}
            (d/span
              #js {class: "sr-only"}
            )
            (d/span
              #js {class: "icon-bar"}
            )
            (d/span
              #js {class: "icon-bar"}
            )
            (d/span
              #js {class: "icon-bar"}
            )
          )
          (d/a
            #js {class: "navbar-brand", href: "index.html"}
          "SB Admin"
          )
        )
        (d/ul
          #js {class: "nav navbar-right top-nav"}
          (d/li
            #js {class: "dropdown"}
            (d/a
              #js {href: "#", class: "dropdown-toggle", data-toggle: "dropdown"}
            " "
              (d/i
                #js {class: "fa fa-envelope"}
              )
              (d/b
                #js {class: "caret"}
              )
            )
            (d/ul
              #js {class: "dropdown-menu message-dropdown"}
              (d/li
                #js {class: "message-preview"}
                (d/a
                  #js {href: "#"}
                "
                                    
                                        
                                            
                                        
                                        
                                            John Smith
                                            
                                             Yesterday at 4:32 PM
                                            Lorem ipsum dolor sit amet, consectetur...
                                        
                                    
                                "
                  (d/div
                    #js {class: "media"}
                    (d/span
                      #js {class: "pull-left"}
                      (d/img
                        #js {class: "media-object", src: "http://placehold.it/50x50", alt: ""}
                      )
                    )
                    (d/div
                      #js {class: "media-body"}
                      (d/h5
                        #js {class: "media-heading"}
                        (d/strong
                          #js {}
                        )
                      )
                      (d/p
                        #js {class: "small text-muted"}
                        (d/i
                          #js {class: "fa fa-clock-o"}
                        )
                      )
                      (d/p
                        #js {}
                      )
                    )
                  )
                )
              )
              (d/li
                #js {class: "message-preview"}
                (d/a
                  #js {href: "#"}
                "
                                    
                                        
                                            
                                        
                                        
                                            John Smith
                                            
                                             Yesterday at 4:32 PM
                                            Lorem ipsum dolor sit amet, consectetur...
                                        
                                    
                                "
                  (d/div
                    #js {class: "media"}
                    (d/span
                      #js {class: "pull-left"}
                      (d/img
                        #js {class: "media-object", src: "http://placehold.it/50x50", alt: ""}
                      )
                    )
                    (d/div
                      #js {class: "media-body"}
                      (d/h5
                        #js {class: "media-heading"}
                        (d/strong
                          #js {}
                        )
                      )
                      (d/p
                        #js {class: "small text-muted"}
                        (d/i
                          #js {class: "fa fa-clock-o"}
                        )
                      )
                      (d/p
                        #js {}
                      )
                    )
                  )
                )
              )
              (d/li
                #js {class: "message-preview"}
                (d/a
                  #js {href: "#"}
                "
                                    
                                        
                                            
                                        
                                        
                                            John Smith
                                            
                                             Yesterday at 4:32 PM
                                            Lorem ipsum dolor sit amet, consectetur...
                                        
                                    
                                "
                  (d/div
                    #js {class: "media"}
                    (d/span
                      #js {class: "pull-left"}
                      (d/img
                        #js {class: "media-object", src: "http://placehold.it/50x50", alt: ""}
                      )
                    )
                    (d/div
                      #js {class: "media-body"}
                      (d/h5
                        #js {class: "media-heading"}
                        (d/strong
                          #js {}
                        )
                      )
                      (d/p
                        #js {class: "small text-muted"}
                        (d/i
                          #js {class: "fa fa-clock-o"}
                        )
                      )
                      (d/p
                        #js {}
                      )
                    )
                  )
                )
              )
              (d/li
                #js {class: "message-footer"}
                (d/a
                  #js {href: "#"}
                "Read All New Messages"
                )
              )
            )
          )
          (d/li
            #js {class: "dropdown"}
            (d/a
              #js {href: "#", class: "dropdown-toggle", data-toggle: "dropdown"}
            " "
              (d/i
                #js {class: "fa fa-bell"}
              )
              (d/b
                #js {class: "caret"}
              )
            )
            (d/ul
              #js {class: "dropdown-menu alert-dropdown"}
              (d/li
                #js {}
                (d/a
                  #js {href: "#"}
                "Alert Name Alert Badge"
                  (d/span
                    #js {class: "label label-default"}
                  )
                )
              )
              (d/li
                #js {}
                (d/a
                  #js {href: "#"}
                "Alert Name Alert Badge"
                  (d/span
                    #js {class: "label label-primary"}
                  )
                )
              )
              (d/li
                #js {}
                (d/a
                  #js {href: "#"}
                "Alert Name Alert Badge"
                  (d/span
                    #js {class: "label label-success"}
                  )
                )
              )
              (d/li
                #js {}
                (d/a
                  #js {href: "#"}
                "Alert Name Alert Badge"
                  (d/span
                    #js {class: "label label-info"}
                  )
                )
              )
              (d/li
                #js {}
                (d/a
                  #js {href: "#"}
                "Alert Name Alert Badge"
                  (d/span
                    #js {class: "label label-warning"}
                  )
                )
              )
              (d/li
                #js {}
                (d/a
                  #js {href: "#"}
                "Alert Name Alert Badge"
                  (d/span
                    #js {class: "label label-danger"}
                  )
                )
              )
              (d/li
                #js {class: "divider"}
              )
              (d/li
                #js {}
                (d/a
                  #js {href: "#"}
                "View All"
                )
              )
            )
          )
          (d/li
            #js {class: "dropdown"}
            (d/a
              #js {href: "#", class: "dropdown-toggle", data-toggle: "dropdown"}
            " John Smith "
              (d/i
                #js {class: "fa fa-user"}
              )
              (d/b
                #js {class: "caret"}
              )
            )
            (d/ul
              #js {class: "dropdown-menu"}
              (d/li
                #js {}
                (d/a
                  #js {href: "#"}
                " Profile"
                  (d/i
                    #js {class: "fa fa-fw fa-user"}
                  )
                )
              )
              (d/li
                #js {}
                (d/a
                  #js {href: "#"}
                " Inbox"
                  (d/i
                    #js {class: "fa fa-fw fa-envelope"}
                  )
                )
              )
              (d/li
                #js {}
                (d/a
                  #js {href: "#"}
                " Settings"
                  (d/i
                    #js {class: "fa fa-fw fa-gear"}
                  )
                )
              )
              (d/li
                #js {class: "divider"}
              )
              (d/li
                #js {}
                (d/a
                  #js {href: "#"}
                " Log Out"
                  (d/i
                    #js {class: "fa fa-fw fa-power-off"}
                  )
                )
              )
            )
          )
        )
        (d/div
          #js {class: "collapse navbar-collapse navbar-ex1-collapse"}
          (d/ul
            #js {class: "nav navbar-nav side-nav"}
            (d/li
              #js {}
              (d/a
                #js {href: "index.html"}
              " Dashboard"
                (d/i
                  #js {class: "fa fa-fw fa-dashboard"}
                )
              )
            )
            (d/li
              #js {}
              (d/a
                #js {href: "charts.html"}
              " Charts"
                (d/i
                  #js {class: "fa fa-fw fa-bar-chart-o"}
                )
              )
            )
            (d/li
              #js {}
              (d/a
                #js {href: "tables.html"}
              " Tables"
                (d/i
                  #js {class: "fa fa-fw fa-table"}
                )
              )
            )
            (d/li
              #js {class: "active"}
              (d/a
                #js {href: "forms.html"}
              " Forms"
                (d/i
                  #js {class: "fa fa-fw fa-edit"}
                )
              )
            )
            (d/li
              #js {}
              (d/a
                #js {href: "bootstrap-elements.html"}
              " Bootstrap Elements"
                (d/i
                  #js {class: "fa fa-fw fa-desktop"}
                )
              )
            )
            (d/li
              #js {}
              (d/a
                #js {href: "bootstrap-grid.html"}
              " Bootstrap Grid"
                (d/i
                  #js {class: "fa fa-fw fa-wrench"}
                )
              )
            )
            (d/li
              #js {}
              (d/a
                #js {href: "javascript:;", data-toggle: "collapse", data-target: "#demo"}
              " Dropdown "
                (d/i
                  #js {class: "fa fa-fw fa-arrows-v"}
                )
                (d/i
                  #js {class: "fa fa-fw fa-caret-down"}
                )
              )
              (d/ul
                #js {id: "demo", class: "collapse"}
                (d/li
                  #js {}
                  (d/a
                    #js {href: "#"}
                  "Dropdown Item"
                  )
                )
                (d/li
                  #js {}
                  (d/a
                    #js {href: "#"}
                  "Dropdown Item"
                  )
                )
              )
            )
            (d/li
              #js {}
              (d/a
                #js {href: "blank-page.html"}
              " Blank Page"
                (d/i
                  #js {class: "fa fa-fw fa-file"}
                )
              )
            )
          )
        )
      )
    
    )


# TODO

* create a bookmarklet to inject OmRazor (and jQuery) into the page
* closing parens should be on previous line...
