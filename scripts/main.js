$(function() {

  'use strict';

  var $navBar = $('nav');

  // Toggle the nav menu list when the user clicks the nav menu button
  $('.menu').on('touchstart', function () {
    if ($navBar.css('overflow') !== 'visible') {
      $navBar.css('overflow', 'visible');
    } else {
      $navBar.css('overflow', 'hidden');
    }
  });

  $('.content').on('touchstart', function(event) {
    $navBar.css('overflow', 'hidden');
  });
});