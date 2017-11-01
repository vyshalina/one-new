$(document).ready(function() {

  $(".js-lava_menu").lavaLamp({
    fx: 'easeInOutQuart',
    speed: 600,
    startItem: 0
  });

  $(".js-lava_menu li a").click(function() {
  	$('.js-slides article').removeClass('active').eq($(this).parent().index() - 1).addClass('active');
  });
});

$(window).load(function() {
  $('.preloader').fadeOut();
  $('body').removeClass('on-load');
});