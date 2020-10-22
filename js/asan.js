(function ($) {
  $("#wrap").on(
    "click",
    "#header h1 a, #footer .quickMenu a, .mainContent #step_area a,.medicalContent .mediList a, .contTit .prev a",
    function () {
      var url = this.href;
      $("#container > #content").remove();
      $("#container").load(url + " #content");
      return false;
    }
  );

  $("#container").on("click", ".medicalContent .mediList a", function () {
    var url = this.href;
    alert(url);
    $("#container > #content").remove();
    $("#container").load(url + " #content");

    $.ajax({
      type: "GET",
      url: "data/doctors.json",

      beforeSend: function (xhr) {
        if (xhr.overrideMimeType) {
          xhr.overrideMimeType("application/json");
        }
      },
      success: function (data) {
        var usedata = data[newpart1];
        var newContent;
        function dataPrint() {
          newContent = "";
          for (var i in usedata) {
            newContent += `<li><div class='img'><img src='${usedata[i].photo}' alt=''></div>`;
            newContent += `<div class='doctorInfo'><strong>${usedata[i].name}</strong>`;
            newContent += `<p>${usedata[i].depart}</p>`;
            newContent += `<div>${usedata[i].about}</div></div></li>`;
          }
          $("#content .part1DoctorList").html(`<ul>${newContent}</ul>`);
        }
        dataPrint();
      },
      error: function () {
        alert("큰일");
      },
    });

    return false;
  });

  $(window).scroll(function () {
    var sct = $(this).scrollTop();
    if (sct >= 50 && !$("#header").hasClass("on")) {
      $("#header").stop().slideUp(100).stop().slideDown(100).addClass("on");
    } else if (sct < 50 && $("#header").hasClass("on")) {
      $("#header").removeClass("on");
    }
  });
})(jQuery);
