//document.getElementById('menu').addEventListener("click", menuClick);


var x = window.matchMedia("(min-width: 482px) and (min-height: 701px)")
x.addListener(linksInitial) // Attach listener function on state changes
var y = window.matchMedia("(max-width: 481px)")
y.addListener(linksNone) // Attach listener function on state changes
var z = window.matchMedia("(max-height: 700px)")
z.addListener(linksNone) // Attach listener function on state changes



//function menuClick() {
//  var links = document.getElementById('links');
//  if (links.children[1].style.display === 'block') {
//    for (var i=1; i< links.children.length; i++) {
//      links.children[i].style.display = 'none'
//    }
//  } else {
//    for (var i=1; i< links.children.length; i++) {
//      links.children[i].style.display = 'block'
//    }
//  }
//}

function linksInitial(x) {
  if (x.matches) {
    var links = document.getElementById('links');
    for (var i=1; i< links.children.length; i++) {
      links.children[i].style.display = 'initial'
    }
  }
}

function linksNone(x) {
  if (x.matches) {
    var links = document.getElementById('links');
    for (var i=1; i< links.children.length; i++) {
      links.children[i].style.display = 'none'
    }
  }
}

function openNav() {
  $('#overlay').fadeIn(1200);
}

function closeNav() {
  $('#overlay').fadeOut(1600);
}

function notMobile() {
  const vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  return (vw > 481);
}

// makes element change color briefly on mobile
function touchStart(el, color2, color1) {
  el.style.color = color2;
  console.log(el);
  console.log(el.style.color);
  setTimeout(function() {
    el.style.color = color1;
  }, 300);
}

// makes element change color briefly on mobile
function touchStartSVG(el, color2, color1) {
  el.style.fill = color2;
  setTimeout(function() {
    el.style.fill = color1;
  }, 300);
}

function arrowTouch(el, src2, src1) {
  el.src = src2;
  setTimeout(function() {
    el.src = src1;
  }, 300);
}
  

  

