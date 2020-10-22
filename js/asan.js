(function ($) {
  // 로고를 클릭하면 main.html의 #content를 load() 하시오.
  $("#wrap").on(
    "click",
    "#header h1 a, #footer .quickMenu a, .mainContent #step_area a, .medicalContent .mediList a",
    function () {
      var url = this.href;
      $("#container > #content").remove();
      $("#container").load(url + " #content");
      return false;
    }
  );

  $(window).scroll(function () {
    var sct = $(this).scrollTop();
    if (sct >= 50 && !$("#header").hasClass("on")) {
      $("#header").addClass("on").slideUp(10).slideDown(10);
    } else if (sct < 50 && $("#header").hasClass("on")) {
      $("#header").removeClass("on").slideUp(10).slideDown(10);
    }
  });

  $("body").on("click", ".contTit prev a", function () {
    history.back(-1);
    return false;
  });
})(jQuery);
