  // start Swiper 

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
    }
  });

  var swiperTour = new Swiper('.swiper-tour', {
    slidesPerView: 'auto',
    spaceBetween: 20,
    freeMode: true,
    pagination: false,
    // Responsive breakpoints
    breakpoints: {
      320: {
        spaceBetween: 5
      },

      768: {
        spaceBetween: 30
      }
    },
  });
  // end Swiper 

  // start accordion 

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
    };

    $('.accordion').accordion();

    document.onscroll = menuFixed;

    function menuFixed() {
      if (window.scrollY > 0) {
        document.querySelector('.header__top').classList.add('menu-fixed');
      } else {
        document.querySelector('.header__top').classList.remove('menu-fixed');
      }
    }
    // end accordion  

    // start select 

    $(document).ready(function () {
      $(".select2").select2({
        placeholder: "Выберите направление",
      });
    });

    // end select 

    // start datepicker 

    $(function () {
      $("#datepicker").datepicker();

      jQuery(function ($) {
        $.datepicker.regional['ru'] = {
          closeText: 'Закрыть',
          prevText: '&#x3c;Пред',
          nextText: 'След&#x3e;',
          currentText: 'Сегодня',
          monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
            'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
          ],
          monthNamesShort: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
            'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
          ],
          dayNames: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
          dayNamesShort: ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'сбт'],
          dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
          weekHeader: 'Нед',
          dateFormat: 'dd.mm.yy',
          firstDay: 1,
          isRTL: false,
          showMonthAfterYear: false,
          yearSuffix: ''
        };
        $.datepicker.setDefaults($.datepicker.regional['ru']);
      });
    });
  });

  // end datepicker 

  // start scroll on click 

  $(document).ready(function () {
    $("#header-menu").on("click", "a", function (event) {
      event.preventDefault();
      var id = $(this).attr('href'),
        top = $(id).offset().top;
      $('body,html').animate({
        scrollTop: top
      }, 1500);
    });
  });

  // end scroll on click 

  const isMobile = {
    Android: function () {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
      return (
        isMobile.Android() ||
        isMobile.BlackBerry() ||
        isMobile.iOS() ||
        isMobile.Opera() ||
        isMobile.Windows());
    }
  };

  const iconMenu = document.querySelector('.menu__icon');
  const menuBody = document.querySelector('.menu__body');
  if (iconMenu) {
    iconMenu.addEventListener("click", function (e) {
      document.body.classList.toggle('_lock');
      iconMenu.classList.toggle('_active');
      menuBody.classList.toggle('_active');
    });
  }