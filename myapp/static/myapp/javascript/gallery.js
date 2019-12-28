
var firstVisiblePortrait = 0;


const galDiv = document.getElementById("gallery");
const numPortraits = galDiv.children.length;

var currentPage = 0;

document.getElementById('previous').addEventListener("click", previousClick);
document.getElementById('next').addEventListener("click", nextClick);




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
    return;
  }
  for (let x=0; x < i; x++) {
    galDiv.children[x].style.display = 'none';
  }
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
  while (galDiv.children[firstVisiblePortraitI].offsetTop < galDiv.offsetHeight) {
    i--;
    galDiv.children[i].style.display = display_mode;
  }
}


Number.prototype.mod = function(n) {
    return ((this%n)+n)%n;
};






