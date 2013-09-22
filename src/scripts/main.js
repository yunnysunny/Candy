$(function() {

  'use strict';

  var $navBar = $('nav');

  // If touchscreen listen for touch, if not listen for click
  var hitEvent = 'ontouchstart' in document.documentElement ? 'touchstart' : 'click';

  // Toggle the nav menu list when the user clicks the nav menu button
  $('.menu').on(hitEvent, function () {
    if ($navBar.css('overflow') !== 'visible') {
      $navBar.css('overflow', 'visible');
    } else {
      $navBar.css('overflow', 'hidden');
    }
  });

  $('.content').on(hitEvent, function(event) {
    $navBar.css('overflow', 'hidden');
  });
});