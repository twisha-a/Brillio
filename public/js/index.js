$("#mainCarousel").carousel({
  interval: 3500,
  cycle: true,
});
function slider(flag, numSlides) {
  let centerSlide = (flag % numSlides) + 1;
  let middleOfSlider = numSlides / 2;
  let xCoef = 300 * ((middleOfSlider - centerSlide) / middleOfSlider);

  if ($(window).width() <= 450) {
    xCoef = 0;
  }

  $(".slide-indicator").removeClass("active");
  $(".indicator-" + centerSlide).addClass("active");
  $(".slide.card").removeClass("active");
  $("#side-" + centerSlide).addClass("active");

  $("#side-" + centerSlide).css("z-index", "999");
  centerSlide <= numSlides / 2
    ? $("#side-" + centerSlide).css("transform", `translateX(${xCoef - 100}%) scale(1.2)`)
    : $("#side-" + centerSlide).css(
        "transform",
        `translateX(${xCoef - 100}%) scale(1.2)`
      );

  for (let i = 1; i <= numSlides; i++) {
    if (i == centerSlide) {
      continue;
    }
    $("#side-" + i).css("z-index", "9");
    if (i < centerSlide) {
      $("#side-" + i).css("transform", `translateX(${xCoef}%) scale(1)`);
      continue;
    }
    $("#side-" + i).css("transform", `translateX(${xCoef}%) scale(1)`);
  }
}

jQuery(".owl-carousel").owlCarousel({
  autoplay: true,
  lazyLoad: true,
  loop: true,
  margin: 20,
  /*
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      */
  responsiveClass: true,
  autoHeight: true,
  autoplayTimeout: 4000,
  smartSpeed: 800,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    475: {
      items: 2,
    },
    600: {
      items: 3,
    },

    1024: {
      items: 4,
    },

    1366: {
      items: 5,
    },
  },
});
