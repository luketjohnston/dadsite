resizeWindow();

window.addEventListener("resize", resizeWindow);

function resizeWindow() {

  // calculate outerContainer height based on description height and 
  // arrows height
  var outerContainer = $("#outerContainer");
  var descriptionHeight = $("#textDiv").outerHeight(true);
  var arrowsHeight = $("#gallery_index").outerHeight(true);
  var str = 'calc(100vh - ' + arrowsHeight.toString() + 'px' + ')';
  outerContainer.height(str);
  

  // calculate image max-height based on description height
  var containerHeight = $("#outerContainer").outerHeight(true);
  var portrait = $("#portrait");
  var maxH = containerHeight - descriptionHeight;
  var maxH_str = maxH.toString() + 'px';

  portrait.css('max-height', maxH_str);

  //var portraitContainer = $("#portraitContainer");
  //portraitContainer.css("top", "50%");
  //portraitContainer.css("left", "50%");
  //portraitContainer.css("transform", "translate(-50%, -50%)");


}






  
