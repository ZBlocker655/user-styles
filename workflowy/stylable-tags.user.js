// ==UserScript==
// @name           WorkflowyStylableTags
// @description    Gives each tag it's own CSS style, so you can style them with CSS.
// @author         LukeMT
// @homepageURL    https://github.com/Zblocker655/user-styles
// @updateURL      https://raw.githubusercontent.com/zblocker655/user-styles/main/workflowy/stylable-tags.user.js
// @include        http*://*workflowy.com/*
// @version        1.1
// ==/UserScript==
(function() {
  'use strict';
  String.prototype.endsWith = function(suffix) {
      return this.indexOf(suffix, this.length - suffix.length) !== -1;
  };
  var customClasses = function(index, old){
    var classes = old.split(" ");
    var custom = [];
    for(var i = 0; i < classes.length; i++){
      if(classes[i].endsWith("-proj")){ custom.push(classes[i]);}
    }
    return custom.join(" ");
  };
  var StylableTagsCounter = 1;
  setInterval(function(){
    StylableTagsCounter ++;
    if( StylableTagsCounter >= 3){
      $('.project').removeClass(customClasses);
      $('.pageContainer').removeClass(customClasses);
      StylableTagsCounter = 0;
    }
    $('span > .contentTagText').map( function(){
      var x = $(this).text().toLowerCase();
      $(this).closest('.project').addClass(x+"-proj");}
    );
  },10);
})();
