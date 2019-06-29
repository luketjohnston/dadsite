
//var folder = "images/portraits";

// Counts the number of portraits we have loaded
//var imCount = 0;
// number of portraits per page
//const imPerPage = 6;
//var buildingPage;

var imPerPage = 6; // gonna have to compute from window size at some point
var firstVisiblePortrait = 0;


// counts the number of pages for the gallery 
//var galPageCount = document.getElementById("gallery").childElementCount;

const galDiv = document.getElementById("gallery");
const numPortraits = galDiv.children.length;

// in gallery.html, set portraits display: none, so set the first imPerPage visible
for (i=0; i < imPerPage; i++) {
  galDiv.children[i].style.display = 'initial';
}




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
  for (let i=0; i < imPerPage; i++) {
    galDiv.children[firstVisiblePortrait].style.display = 'none';
    firstVisiblePortrait++;
    if (firstVisiblePortrait >= galDiv.children.length) {
      firstVisiblePortrait = 0;
      break; 
    }
  }
  for (let i=0; i < imPerPage; i++) {
    if (firstVisiblePortrait + i >= galDiv.children.length) { break; }
    galDiv.children[firstVisiblePortrait + i].style.display = 'initial';
  }
}

function previousClick() {
  // TODO
  for (let i=0; i < imPerPage; i++) {
    galDiv.children[firstVisiblePortrait].style.display = 'none';
    firstVisiblePortrait++;
    if (firstVisiblePortrait >= galDiv.children.length) {
      firstVisiblePortrait = 0;
      break; 
    }
  }
  for (let i=0; i < imPerPage; i++) {
    if (firstVisiblePortrait + i >= galDiv.children.length) { break; }
    galDiv.children[firstVisiblePortrait + i].style.display = 'initial';
  }

}

Number.prototype.mod = function(n) {
    return ((this%n)+n)%n;
};







