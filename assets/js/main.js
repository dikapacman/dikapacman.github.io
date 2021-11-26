jQuery(window).on('load', function () {
  'use strict';

  $('.preloader').addClass('hide-preloader');

  setTimeout(function () {
    $('#intro .animation-container').each(function () {
      var e = $(this);

      setTimeout(function () {
        e.addClass('run-animation');
      }, e.data('animation-delay'));
    });
  }, 700);
});

jQuery(document).ready(function ($) {
  'use strict';

  $(document).on('click', 'a.smooth-scroll', function (event) {
    event.preventDefault();

    $('html, body').animate(
      {
        scrollTop: $($.attr(this, 'href')).offset().top - 80,
      },
      500
    );
  });
});
