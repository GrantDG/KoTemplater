KoTemplater
===========

A (very simple) template engine for using [Knockout](http://knockoutjs.com/) and [Twitter Typeahead](https://github.com/twitter/typeahead.js).

Simply include the koTemplater.js file before you need to use the engine.

From the typeahead examples page:

```javascript
$('.example-twitter-oss .typeahead').typeahead({                              
  name: 'twitter-oss',                                                        
  prefetch: '../data/repos.json',                                             
  template: [                                                                 
    '<p class="repo-language" data-bind="text: language"></p>',                              
    '<p class="repo-name" data-bind="text: name"></p>',                                      
    '<p class="repo-description" data-bind="text: description"></p>'                         
  ].join(''),                                                                 
  engine: KoTemplater                                                               
});
```
