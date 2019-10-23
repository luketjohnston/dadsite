
'use strict';

//setInterval(function() {
//  $('#slideshow > div:first')
//    .fadeOut(1000)
//    .next()
//    .fadeIn(1000)
//    .end()
//    .appendTo('#slideshow');
//}, 3000);

//$(document).ready(function() {
//  $('.carousel').carousel({})
//});

// slick slideshow!
$(document).ready(function() {
  $('.slideshow').slick({
    infinite: true,
    speed: 3800,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnFocus: false,
    pauseOnHover: false,
    arrows: false,
    fade: true,
    //variableWidth: true,
    //slidesToShow: 1,
    //vertical: true,
    //centerMode: true,
    cssEase: 'linear'
  });
});

