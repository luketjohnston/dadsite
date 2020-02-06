// first get the portrait from the hash

var hash = window.location.hash.substr(1);

var visibleElements;
var nextHash;
var prevHash;


$(document).ready(function() {

  var maxDescriptionHeight = maxHeight($('.description'));
  $('#textDiv').height(maxDescriptionHeight);
  update();
});

// taken from stack exchange answer https://stackoverflow.com/questions/6060992/element-with-the-max-height-from-a-set-of-elements
function maxHeight(elems){
    return Math.max.apply(null, elems.map(function ()
    {
        return $(this).height();
    }).get());
}


function nextClick() {
  if(nextHash) {
    visibleElements.css('opacity', 0);
    hash = nextHash;
    console.log(window.location.hash);
    update();
    window.location.hash = '#' + hash;
  }
}

function prevClick() {
  if(prevHash) {
    visibleElements.css('opacity', 0);
    hash = prevHash;
    console.log(window.location.hash);
    update();
    window.location.hash = '#' + hash;
  }
}

function update() {

  visibleElements = $("." + $.escapeSelector(hash));
  
  visibleElements.css('opacity', 1);
  
  nextHash = visibleElements.first().next().data('myid');
  prevHash = visibleElements.first().prev().data('myid');

  if(!prevHash) {
    prevHash = $(".myslide").last().data('myid');
  }
  if(!nextHash) {
    nextHash = $(".myslide").first().data('myid');
  }

  var urlBase = $("#previous").data('url');
  $("#previous a").attr("href", urlBase + '#' + prevHash);
  $("#next a").attr("href", urlBase + '#' + nextHash);

}

  






  
