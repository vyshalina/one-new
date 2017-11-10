'use strict';

$(document).ready(function () {

  $('.js-menu-open').click(function () {
    $('.menu-open').addClass('active');
    $('body').addClass('on-load');
    return false;
  });

  $('.menu-close').click(function () {
    $('.menu-open').removeClass('active');
    $('body').removeClass('on-load');
    return false;
  });

  $('.intro nav > ul li a').hover(function () {
    var decor = $('.intro nav > ul li.decoration');
    var itemNumber = $(this).parent().index();

    $('.intro nav > ul li').removeClass('hovered');

    if (itemNumber === 1) {
      decor.css('width', '26%');
      $('.intro nav > ul li:nth-child(2)').addClass('hovered');
    } else if (itemNumber === 2) {
      decor.css('width', '54%');
      $('.intro nav > ul li:nth-child(2)').addClass('hovered');
      $('.intro nav > ul li:nth-child(3)').addClass('hovered');
    } else if (itemNumber === 3) {
      decor.css('width', '80%');
      $('.intro nav > ul li:nth-child(2)').addClass('hovered');
      $('.intro nav > ul li:nth-child(3)').addClass('hovered');
      $('.intro nav > ul li:nth-child(4)').addClass('hovered');
    } else if (itemNumber === 4) {
      decor.css('width', '100%');
      $('.intro nav > ul li:nth-child(2)').addClass('hovered');
      $('.intro nav > ul li:nth-child(3)').addClass('hovered');
      $('.intro nav > ul li:nth-child(4)').addClass('hovered');
      $('.intro nav > ul li:nth-child(5)').addClass('hovered');
    }
  });

  $('.intro nav > ul li a').click(function () {
    var itemNumber = $(this).parent().index() - 1;
    $('.js-slides article').fadeOut().eq(itemNumber).fadeIn();
    return false;
  });

  $('.reset').click(function () {
    $('.filters input').attr('checked', false);
    return false;
  });

  $('.js-range-slider').jRange({
    from: 0,
    to: 100,
    step: 1,
    format: '%s',
    width: 155,
    showLabels: true,
    isRange: true
  });

  var owl = $('.js-owl-carousel');
  owl.owlCarousel({
    loop: true,
    nav: false,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        margin: 0
      },
      481: {
        items: 2
      },
      600: {
        items: 3,
        margin: 15
      },
      1000: {
        items: 4,
        margin: 20
      }
    }
  });
  $('.joined a.btn-white').click(function () {
    owl.trigger('next.owl.carousel');
    return false;
  });

  $(".js-carousel").owlCarousel({
    items: 1,
    nav: false,
    dotsClass: 'navigation'
  });

  $('.js-partners-carousel').owlCarousel({
    loop: true,
    nav: true,
    responsiveClass: true,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    responsive: {
      0: {
        items: 1,
        margin: 0
      },
      420: {
        items: 2,
        margin: 0
      },
      768: {
        items: 3
      },
      992: {
        items: 4,
        margin: 15
      },
      1199: {
        items: 5,
        margin: 15
      }
    }
  });

  $('.js-carousel_celebrity').owlCarousel({
    loop: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        margin: 0
      },
      480: {
        items: 2,
        margin: 0
      },
      768: {
        items: 3
      },
      1200: {
        items: 4,
        margin: 15
      }
    }
  });

  // scroll menu
  var header = $(".js-header"),
      scrollPrev = 0;

  $(window).scroll(function () {
    var scrolled = $(window).scrollTop(),
        firstScrollUp = false,
        firstScrollDown = false;

    if (scrolled > 0) {
      if (scrolled > scrollPrev) {
        firstScrollUp = false;
        if (scrolled < header.height() + header.offset().top) {
          if (firstScrollDown === false) {
            header.removeClass('active');
            firstScrollDown = true;
          }
        } else {
          header.removeClass('active');
        }
      } else {
        firstScrollDown = false;
        if (scrolled > header.offset().top) {
          if (firstScrollUp === false) {
            header.addClass('active');
            firstScrollUp = true;
          };
        }
      }
      scrollPrev = scrolled;
    }

    if (scrolled > 50) {
      header.addClass('filled');
    } else if (scrolled < 50) {
      header.removeClass('filled');
    }

    // parallax();
  });

  // function parallax() {
  //   var scrolled = $(window).scrollTop();
  //   var position = -(scrolled*0.1);
  //   $('.dobro .counter').css('background-position', '-200px '+position+'px');
  // }
});

$(window).load(function () {
  $('.preloader').fadeOut();
  $('body').removeClass('on-load');
});