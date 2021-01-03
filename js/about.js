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

$(document).ready(function () {
  var url = window.location.href;
  let me = $("ul.nav-menu li .nav-link");
  $(me).map(function (idx, elem) {
    if (url.includes($(elem).attr("href"))) {
      $(elem).addClass("nav-link-active");
    }
  });
});
