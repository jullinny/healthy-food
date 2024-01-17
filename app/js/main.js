$(".about__gallery").slick({
  variableWidth: true,
  infinite: true,
  lazyLoad: "ondemand",
  slidesToShow: 2,
  slidesToScroll: 1,
  prevArrow: "<img class='slick-prev' src='images/dist/prev-gallery.svg'>",
  nextArrow: "<img class='slick-next' src='images/dist/next.svg'>",
});

$(function () {
  $('#open').on('click', function() {
      $('#menu').addClass('header__menu--open');
  });

  $('#close').on('click', function() {
      $('#menu').removeClass('header__menu--open');
  });
});

$(document).ready(function () {
  $(".header__menu-list").on("click", "a", function (event) {
      //отменяем стандартную обработку нажатия по ссылке
      event.preventDefault();

      //забираем идентификатор бока с атрибута href
      let id = $(this).attr('href'),

          //узнаем высоту от начала страницы до блока на который ссылается якорь
          top = $(id).offset().top;

      //анимируем переход на расстояние - top за 1500 мс
      $('body, html').animate({ scrollTop: top }, 1500);

  });
});

