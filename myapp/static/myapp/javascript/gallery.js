
var firstVisiblePortrait = 0;


const galDiv = document.getElementById("gallery");
const numPortraits = galDiv.children.length;

var currentPage = 0;

document.getElementById('previous').addEventListener("click", previousClick);
document.getElementById('next').addEventListener("click", nextClick);




function nextClick() {
  let i = 0;
  // determine what portrait will be the first on the next page
  while (i < numPortraits && (galDiv.children[i].offsetTop < 450 || 
      galDiv.children[i].style.display === 'none')) { 
    i++; 
  }

  if (i === numPortraits) {
    // go back to beginning, set all portraits visible again
    for (i = 0; i < numPortraits; i++) {
      galDiv.children[i].style.display = 'initial';
    }
    return;
  }
  for (let x=0; x < i; x++) {
    galDiv.children[x].style.display = 'none';
  }
}

function previousClick() {
  // This is non-obvious to implement, but turns out pretty simple. We just
  //  iterate backward through the children, setting their display to 'initial',
  //  until the previous first visible portrait is no longer visible.
  var i = 0; 
  while (galDiv.children[i].style.display === 'none') {
    i++;
  }
  let firstVisiblePortraitI = i;
  if (i === 0) {return;}
  while (galDiv.children[firstVisiblePortraitI].offsetTop < 450) {
    i--;
    galDiv.children[i].style.display = 'initial';
  }
}


Number.prototype.mod = function(n) {
    return ((this%n)+n)%n;
};






