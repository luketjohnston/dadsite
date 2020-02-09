
var firstVisiblePortrait = 0;

// runs this when document is ready
$(resizeGallery);

const galDiv = document.getElementById("gallery");
const numPortraits = galDiv.children.length;

var currentPage = 0;

document.getElementById('previous').addEventListener("click", previousClick);
document.getElementById('next').addEventListener("click", nextClick);

var y = window.matchMedia("(max-width: 481px)")
y.addListener(displayAllImages) // Attach listener function on state changes

function displayAllImages(x) {
  if (x.matches) {
    for (let k=0; k < numPortraits; k++) {
      galDiv.children[k].style.display = 'initial';
    }
  }
}

window.onresize = resizeGallery;

function resizeGallery() {
  updateImageHeight();
  setGalleryStyle();
}

// determines whether an odd or even number of images is visible, ad sets the style accordingly
// (odd numbers have constant margins between images, even numbers are justified
function setGalleryStyle() {
  // TODO do we need this?
  galDiv.style.width = 'auto';
  galDiv.style.display = 'block';
  galDiv.style.justifyContent = 'none';
  let i = 0;
  // determine how many portraits are visible with current window size
  while (galDiv.children[i].style.display === 'none') { 
    i++;
  }
  let firstVisible = i;
  while (i < numPortraits && (galDiv.children[i].children[0].offsetTop < galDiv.offsetHeight )) { 
    i++; 
  }

  let numVisible = i - firstVisible;
  console.log('numVisible:' + numVisible);
  if (numVisible % 2 === 1 || numVisible == 2) {
    galDiv.style.display = 'block';
    galDiv.style.width = 'auto';
  } else {
    // compute the necessary minimum width of gallery (for some reason, the empirical way doesn't
    // give the correct values, so gotta do the math here)
    let topWidth = 0;
    let botWidth = 0;
    let k = 0;
    while (k < numVisible/2 && (galDiv.children[firstVisible + k].children[0].offsetTop < galDiv.offsetHeight )) { 
      topWidth += $(galDiv.children[firstVisible + k]).outerWidth(true);
      k++; 
    }
    while (k < numVisible && (galDiv.children[firstVisible + k].children[0].offsetTop < galDiv.offsetHeight )) { 
      botWidth += $(galDiv.children[firstVisible + k]).outerWidth(true);
      k++; 
    }
    galDiv.style.width = Math.max(topWidth, botWidth) + 'px';
    galDiv.style.display = 'flex';
    galDiv.style.flexWrap = 'wrap';
    galDiv.style.justifyContent = 'space-between';
  }
} 



// determines whether we can fit one or two rows of images in the gallery div. If we can fit only fit one, sets image
// height to be as large as possible to fill the div. If we can fit two, then sets image height as large
// as possible given that we can fit two.
function updateImageHeight() {

  // check if mobile version and if so don't run.

  console.log('here')
  if (window.matchMedia("(max-width: 481px)").matches) {
    $('#gallery > a > img').css('height', 'auto');
    $('#gallery').css('height', 'auto');
    $('#gallery').css('max-height', 'none');
    return;
  }
  $('#gallery').css('height', 'calc(95vh - 270px)');
  $('#gallery').css('max-height', '460px');

  let minImgH = 120; 
  let padding = 40;

  let galHeight = $('#gallery').height();
  console.log('galHeight: ' + galHeight);
  let minTwoRowH = (minImgH + padding) * 2;
  console.log('minTwoRowH: ' + minTwoRowH);
  let setHeight = 0;
  if (galHeight > minTwoRowH) {
    setHeight = Math.floor((galHeight - 2 * padding) / 2) - 1;
  } else {
    setHeight = Math.max(galHeight - padding, minImgH);
  }

  $('#gallery > a > img').css('height', setHeight + 'px');

  //now that we've figured out image height, we need to set the width so that the
  // first page of the gallery shows 6 images for the 2-row version, and 3 for one-row
  let galMaxW = 620; // make sure matches gallery.css
  let w1 = 0;
  let w2 = 0;
  let imgs = $('#gallery > a > img')
  for (i=0; i < 3; i++) {
    // have to compute width from setHeight since images may not be currently displayed
    dom_im = imgs.get(i)
    ratio = dom_im.naturalWidth / dom_im.naturalHeight;
    w1 += (ratio * setHeight) + padding;
  }
  if (galHeight > minTwoRowH) {
    for (i=3; i < 6; i++) {
      dom_im = imgs.get(i)
      ratio = dom_im.naturalWidth / dom_im.naturalHeight;
      w2 += (ratio * setHeight) + padding;
    }
    // 70 is just a hack so it looks good for the default window size
    $('#gallery').css('max-width', Math.min(Math.max(w1,w2),galMaxW - 10) + 70 + 'px');
  } else {
    // gallery can be a little wider for the single-row version, because we want to be 
    // able to fit 3 images in each page
    $('#gallery').css('max-width', Math.min(Math.max(w1,w2),galMaxW + 150) + 70 + 'px');
  }


  
}
  



function nextClick() {
  // first, determine viewing mode:
  display_mode = $(window).width() > 400 ? 'initial' : 'block';

  let i = 0;
  // determine what portrait will be the first on the next page
  while (i < numPortraits && (galDiv.children[i].children[0].offsetTop < galDiv.offsetHeight || 
      galDiv.children[i].style.display === 'none')) { 
    i++; 
  }
  firstVisiblePortrait = i;

  if (i === numPortraits) {
    // go back to beginning, set all portraits visible again
    for (i = 0; i < numPortraits; i++) {
      galDiv.children[i].style.display = display_mode;
    }
    firstVisiblePortrait = 0;
    setGalleryStyle();
    return;
  }
  for (let x=0; x < i; x++) {
    galDiv.children[x].style.display = 'none';
  }
  setGalleryStyle();
}

function previousClick() {
  // This is non-obvious to implement, but turns out pretty simple. We just
  //  iterate backward through the children, setting their display to 'block'
  // or 'initial', depending on whether we are viewing on mobile or not,
  //  until the previous first visible portrait is no longer visible.

  // first, determine viewing mode:
  display_mode = $(window).width() > 400 ? 'initial' : 'block';
  var i = 0; 
  while (galDiv.children[i].style.display === 'none') {
    i++;
  }
  firstVisiblePortraitI = i;
  if (i === 0) {return;}
  while (galDiv.children[firstVisiblePortraitI].offsetTop < galDiv.offsetHeight && i > 0) {
    i--;
    galDiv.children[i].style.display = display_mode;
    setGalleryStyle();
  }
  setGalleryStyle();
}


Number.prototype.mod = function(n) {
    return ((this%n)+n)%n;
};






