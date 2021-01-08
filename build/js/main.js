$(function () {

  $.fn.accordion = function () {
    const trigger = $(this).find('.accordion-trigger');
    const collapse = $(this).find('.accordion-collapse');

    $(trigger).each(function () {
      $(this).on('click', function () {
        $(this).siblings('.accordion-collapse').slideToggle();
        $(this).toggleClass('accordion-open');
        $(this).toggleClass('active');
        $(this).parent().siblings('.accordion-item').find('.accordion-trigger').removeClass('accordion-open');
        $(this).parent().siblings('.accordion-item').find('.accordion-collapse').slideUp();
      });
    });
  }

  $('.accordion').accordion();

  var swiper = new Swiper('.swiper-container', {
    hashNavigation: {
      watchState: true,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  document.onscroll = menuFixed;

  function menuFixed() {
    if (window.scrollY > 0) {
      document.querySelector('.header__top').classList.add('menu-fixed');
    } 
    else {
      document.querySelector('.header__top').classList.remove('menu-fixed');
    }
  }

});