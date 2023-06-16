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

  // Helper function to check if a string ends with a given suffix
  function endsWith(str, suffix) {
    return str.indexOf(suffix, str.length - suffix.length) !== -1;
  }

  // Helper function to remove custom classes from an element
  function removeCustomClasses(element) {
    var classes = element.className.split(' ');
    var custom = [];
    for (var i = 0; i < classes.length; i++) {
      if (endsWith(classes[i], '-proj')) {
        custom.push(classes[i]);
      }
    }
    element.className = custom.join(' ');
  }

  var StylableTagsCounter = 1;
  setInterval(function() {
    StylableTagsCounter++;
    if (StylableTagsCounter >= 3) {
      var projectElements = document.getElementsByClassName('project');
      var pageContainerElements = document.getElementsByClassName('pageContainer');
      for (var i = 0; i < projectElements.length; i++) {
        removeCustomClasses(projectElements[i]);
      }
      for (var j = 0; j < pageContainerElements.length; j++) {
        removeCustomClasses(pageContainerElements[j]);
      }
      StylableTagsCounter = 0;
    }
    var contentTagTextElements = document.querySelectorAll('span > .contentTagText');
    contentTagTextElements.forEach(function(element) {
      var x = element.textContent.toLowerCase();
      var projectElement = element.closest('.project');
      if (projectElement) {
        projectElement.className += ' ' + x + '-proj';
      }
    });
  }, 10);
})();
