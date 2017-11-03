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
      decor.css('width', '52%');
      $('.intro nav > ul li:nth-child(2)').addClass('hovered');
      $('.intro nav > ul li:nth-child(3)').addClass('hovered');
    } else if (itemNumber === 3) {
      decor.css('width', '78%');
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
    $('.js-slides article').eq(itemNumber).addClass('active');

    if (itemNumber === 0) {} else if (itemNumber === 1) {} else if (itemNumber === 2) {} else if (itemNumber === 3) {}
    return false;
  });

  $('.filter-catalog .reset').click(function () {
    $('.filter-catalog-category input').attr('checked', false);
  });

  $('.js-range-slider').jRange({
    from: 0,
    to: 100,
    step: 1,
    format: '%s',
    width: 250,
    showLabels: true,
    isRange: true
  });

  $(".js-owl-carousel").owlCarousel({
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

  $(".js-carousel").owlCarousel({
    items: 1,
    nav: false,
    dotsClass: 'navigation'
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
  });
});

$(window).load(function () {
  $('.preloader').fadeOut();
  $('body').removeClass('on-load');
});