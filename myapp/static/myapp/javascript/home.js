
'use strict';

var slides;
var totalSlides;
var currentSlide;
var nextSlide = 0;
var startedShow = false;

function doSlideshow() {
  if (startedShow) {
    slides.eq(currentSlide).fadeTo(4000, 0);
  }
  slides.eq(nextSlide).fadeTo(4000, 1, waitInBetweenSlides);
  currentSlide = nextSlide;
  nextSlide = (currentSlide + 1) % totalSlides;
}

function waitInBetweenSlides() {
  setTimeout(doSlideshow, 3200);
}


$(document).ready(function(){
  slides = $( ".myslide" );
  totalSlides = slides.length;
  doSlideshow();
  startedShow = true;


  

  });


  
  



