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
  $('#overlay').fadeIn();
}

function closeNav() {
  $('#overlay').fadeOut();
}

function notMobile() {
  const vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  console.log(vw)
  return (vw > 481);
}
  

