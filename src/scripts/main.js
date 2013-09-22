$(function() {

  'use strict';

  // Follow links on first click on mobile Safari
  $('a').on('click touchend', function() {
    window.location = $(this).attr('href');
  });

  // If touchscreen listen for touch, if not listen for click
  var hitEvent = 'ontouchstart' in document.documentElement ? 'touchstart' : 'click';

  // Show or hide nav dropdown
  var nav = false;

  $(document).on(hitEvent, function(event) {

    if (nav) {
      $('nav').css('overflow', 'hidden');
      nav = false;

    } else if ($(event.target).hasClass('menu')) {
      $('nav').css('overflow', 'visible');
      nav = true;
    }
  });
});
