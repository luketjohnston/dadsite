//document.getElementById('menu').addEventListener("click", menuClick);


var x = window.matchMedia("(min-width: 401px)")
x.addListener(linksInitial) // Attach listener function on state changes
var y = window.matchMedia("(max-width: 400px)")
y.addListener(linksNone) // Attach listener function on state changes



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
  
