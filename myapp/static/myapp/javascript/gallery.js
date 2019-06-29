
//var folder = "images/portraits";

// Counts the number of portraits we have loaded
//var imCount = 0;
// number of portraits per page
//const imPerPage = 6;
//var buildingPage;


// counts the number of pages for the gallery 
//var galPageCount = document.getElementById("gallery").childElementCount;

const galDiv = document.getElementById("gallery");

//$.ajax({
//    url : folder,
//    success: function (data) {
//        $(data).find("a").attr("href", function (i, val) {
//            if( val.match(/\.(jpe?g|png|gif)$/) ) { 
//                imCount += 1;
//                if (imCount % imPerPage === 1) {
//                  // make new page
//                  buildingPage = galPage();
//                  galDiv.appendChild(buildingPage);
//                }
//                buildingPage.appendChild(portrait(val));
//            } 
//        });
//    }
//});

var currentPage = 0;

document.getElementById('previous').addEventListener("click", previousClick);
document.getElementById('next').addEventListener("click", nextClick);

function nextClick() {
  incrementPage(1);
}
function previousClick() {
  incrementPage(-1);
}
function incrementPage(x) {
  //TODO
  //console.log(currentPage);
  //document.getElementById('galPage' + currentPage).style.display = 'none';
  //// just mod, but javascript mod returns negative for negative numbers,
  //// so have to do this modification
  //currentPage = (((currentPage + x) % galPageCount) + galPageCount) % galPageCount;
  //document.getElementById('galPage' + currentPage).style.display = 'grid';
}
  


//function galPage() {
//  const page = document.createElement('div');
//  page.setAttribute('id', 'galPage' + galPageCount);
//  page.setAttribute('class', 'galPage');
//  if (galPageCount !== 0) {
//    page.style.display = 'none';
//  }
//  galPageCount += 1;
//  return page;
//}
//
//function portrait(src) {
//  const img = document.createElement('img');
//  img.setAttribute('src', src);
//  const ref = document.createElement('a', );
//  ref.setAttribute('href', src);
//  ref.setAttribute('target', '_blank');
//  ref.appendChild(img);
//  return ref;
//}


Number.prototype.mod = function(n) {
    return ((this%n)+n)%n;
};







