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
