  const swiper = new Swiper('.swiper-container', {
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

    $(document).ready(function () {
      $(".select2").select2({
        placeholder: "Выберите направление",
      });
    });

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