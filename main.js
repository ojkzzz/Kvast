jQuery(function ($) {
  $("input[type='tel']").mask("+7 (999) 999-9999");
});

$(document).ready(function () {
  $(".burger").click(function (event) {
    $(".links,.burger").toggleClass("active");
  });
});
