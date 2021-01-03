// Script for collapsing social icons on top

$(document).ready(function () {
  $("#social-btn-expand").click(function () {
    if ($("#social-top").hasClass("showhide")) {
      $("#social-top").removeClass("showhide");
      $("#social-icon").removeClass("fa-plus");
      $("#social-top-content").toggle();
    } else {
      $("#social-top").addClass("showhide");
      $("#social-icon").addClass("fa-plus");
      $("#social-top-content").toggle();
    }
  });
});
var indexValue = 1;
showImg(indexValue);
function btm_slide(e) {
  showImg((indexValue = e));
}
function side_slide(e) {
  showImg((indexValue += e));
}
function showImg(e) {
  var i;
  const img = document.querySelectorAll(".slide-image");
  const slider = document.querySelectorAll(".btm-slides span");
  if (e > img.length) {
    indexValue = 1;
  }
  if (e < 1) {
    indexValue = img.length;
  }
  for (i = 0; i < img.length; i++) {
    img[i].style.display = "none";
  }
  for (i = 0; i < slider.length; i++) {
    slider[i].style.background = "rgba(0,0,0,0.1)";
  }
  img[indexValue - 1].style.display = "block";
  slider[indexValue - 1].style.background = "#333";
}
