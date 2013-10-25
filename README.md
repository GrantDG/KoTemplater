KoTemplater
===========

A (very simple) template engine for using Knockout and Twitter Typeahead.

Simplay include the koTemplater.js file bafoe you need to use the engine

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
