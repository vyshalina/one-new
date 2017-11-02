$(document).ready(function() {

  $(".js-lava_menu").lavaLamp({
    fx: 'easeInOutQuart',
    speed: 600,
    startItem: 0
  });

  $(".js-lava_menu li a").click(function() {
  	$('.js-slides article').removeClass('active').eq($(this).parent().index() - 1).addClass('active');
  });

  $(".js-owl-carousel").owlCarousel({
  	loop:true,
    nav: false,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            margin:0
        },
        481:{
            items:2
        },
        600:{
            items:3,
            margin:15
        },
        1000:{
            items:4,
            margin:20
        }
    }
  });

  $(".js-carousel").owlCarousel({
  	items:1,
    nav: false,
  	dotsClass:'navigation'
  });

});

$(window).load(function() {
  $('.preloader').fadeOut();
  $('body').removeClass('on-load');
});