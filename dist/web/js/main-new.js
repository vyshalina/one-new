'use strict';

$(document).ready(function () {

  $(".js-lava_menu").lavaLamp({
    fx: 'easeInOutQuart',
    speed: 600,
    startItem: 0
  });
});

$(window).load(function () {
  $('.preloader').fadeOut();
  $('body').removeClass('on-load');
});