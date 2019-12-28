
'use strict';

// slick slideshow!
//$(document).ready(function() {
//  $('.slideshow').slick({
//    speed: 3800,
//    autoplaySpeed: 3500,
//    cssEase: 'linear'
//  });
//});


var slides;
var totalSlides;
var currentSlide;
var nextSlide = 0;
var startedShow = false;

function doSlideshow() {
  if (startedShow) {
    slides.eq(currentSlide).fadeOut(4000);
  }
  slides.eq(nextSlide).fadeIn(4000, waitInBetweenSlides);
  currentSlide = nextSlide;
  nextSlide = (currentSlide + 1) % totalSlides;
}

function waitInBetweenSlides() {
  setTimeout(doSlideshow, 3200);
}


$(document).ready(function(){
  slides = $( ".myslide" );
  slides.hide();
  totalSlides = slides.length;
  doSlideshow();
  startedShow = true;


  

  });


  
  



