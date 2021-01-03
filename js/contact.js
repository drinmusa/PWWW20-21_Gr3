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
function updateBackground() {
  var hr = new Date().getHours(),
    body = document.body,
    bstyle = body.style,
    headertopstyle = document.querySelector(".social-top"),
    headerstyle = document.querySelector(".main-header"),
    headerspacestyle = document.querySelector(".header-space"),
    footer = document.querySelector(".main-footer");

  if (hr < 10) {
    bstyle.backgroundColor = "#FFFFFF";
    headertopstyle.style.backgroundColor = "#FFFFFF";
    headerstyle.style.backgroundColor = "#EBEBEB";
    headerspacestyle.style.backgroundColor = "#FFFFFF";
    bstyle.color = "#000000";
    document
      .querySelectorAll("presentation-category")
      .forEach(function (element) {
        element.style.color = "#313131";
      });
    document.querySelectorAll(".social-icons-btn").forEach(function (element) {
      element.style.backgroundColor = "#D2D2D2";
    });
    document.getElementById("st0").style.stroke = "#000000";
    document.getElementById("st1").style.stroke = "#000000";
  } else if (hr > 10 && hr < 19) {
    bstyle.backgroundColor = "#FFFFFF";
    headertopstyle.style.backgroundColor = "#FFFFFF";
    headerstyle.style.backgroundColor = "#EBEBEB";
    headerspacestyle.style.backgroundColor = "#FFFFFF";
    bstyle.color = "#000000";
    document
      .querySelectorAll("presentation-category")
      .forEach(function (element) {
        element.style.color = "#313131";
      });
    document.querySelectorAll(".social-icons-btn").forEach(function (element) {
      element.style.backgroundColor = "#D2D2D2";
    });
    document.getElementById("st0").style.stroke = "#000000";
    document.getElementById("st1").style.stroke = "#000000";
  } else {
    bstyle.backgroundColor = "#0E0E0E";
    headertopstyle.style.backgroundColor = "#000000";
    headerstyle.style.backgroundColor = "#000000";
    headerspacestyle.style.backgroundColor = "#0E0E0E";
    footer.style.backgroundColor = "#000000";
    bstyle.color = "#FFFFFF";
    document
      .querySelectorAll(".presentation-category")
      .forEach(function (element) {
        element.style.color = "#FFFFFF";
      });
    document.querySelectorAll(".social-icons-btn").forEach(function (element) {
      element.style.backgroundColor = "#1A1A1A";
    });
    document.getElementById("st0").style.stroke = "#505050";
    document.getElementById("st1").style.stroke = "#505050";
  }
}

setInterval(updateBackground, 1000 * 60);
updateBackground();
function validatePhoneNumber() {
  const phoneNumber = document.getElementById("phone").value;
  const PHONE_REGEX_PATTERN = /^[+][/0-9]{8,12}$/gm;

  if (!PHONE_REGEX_PATTERN.test(phoneNumber)) {
    alert("Phone number format not correct!");
  } else {
    const name = document.getElementById("name").value;
    localStorage.setItem("Name", name);
    alert(`We have received your message ${name}`);
    document.getElementById("main-form").reset();
  }
}
