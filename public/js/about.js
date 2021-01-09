"use strict";

$(document).ready(function () {
  $(window).bind("scroll", function (e) {
    parallaxScroll();
  });
});

function parallaxScroll() {
  const scrolled = $(window).scrollTop();
  $("#team-image").css("top", 0 - scrolled * 0.2 + "px");
  $(".img-1").css("top", 0 - scrolled * 0.35 + "px");
  $(".img-2").css("top", 0 - scrolled * 0.05 + "px");
}
