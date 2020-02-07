
var firstVisiblePortrait = 0;

// runs this when document is ready
$(setGalleryStyle);

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

window.onresize = setGalleryStyle;

// determines whether an odd or even number of images is visible, ad sets the style accordingly
// (odd numbers have constant margins between images, even numbers are justified
function setGalleryStyle() {
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
  console.log('numVisible')
  console.log(numVisible)
  if (numVisible % 2 === 1) {
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
    console.log("setting width:");
    console.log(Math.max(topWidth, botWidth));
    galDiv.style.width = Math.max(topWidth, botWidth) + 'px';
    galDiv.style.display = 'flex';
    galDiv.style.flexWrap = 'wrap';
    galDiv.style.justifyContent = 'space-between';
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

  if (i === numPortraits) {
    // go back to beginning, set all portraits visible again
    for (i = 0; i < numPortraits; i++) {
      galDiv.children[i].style.display = display_mode;
    }
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
  let firstVisiblePortraitI = i;
  if (i === 0) {return;}
  while (galDiv.children[firstVisiblePortraitI].offsetTop < galDiv.offsetHeight && i > 0) {
    i--;
    console.log(i);
    galDiv.children[i].style.display = display_mode;
    setGalleryStyle();
  }
  setGalleryStyle();
}


Number.prototype.mod = function(n) {
    return ((this%n)+n)%n;
};






