(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    var params = new URLSearchParams(window.location.search);
    var course = window.getCourseById ? window.getCourseById(params.get("course")) : null;
    if (!course) return;

    function setText(id, value) {
      var el = document.getElementById(id);
      if (el) el.textContent = value;
    }

    var image = document.getElementById("course-image");
    if (image) {
      image.src = course.image;
      image.alt = course.title + " cover image";
    }

    setText("course-category", course.category);
    setText("course-title", course.title);
    setText("course-description", course.description);
    setText("course-instructor", course.instructor);
    setText("course-duration", course.duration);
    setText("course-language", course.language);
    setText("course-level", course.level);
    setText("course-certificate", course.certificate);
    setText("course-requirements", course.requirements);

    var learnList = document.getElementById("course-learn");
    if (learnList) {
      learnList.innerHTML = "";
      course.learn.forEach(function (item) {
        var li = document.createElement("li");
        li.className = "flex items-start";
        li.innerHTML =
          '<i class="fas fa-check-circle text-green-500 mt-1 mr-2"></i><span></span>';
        li.querySelector("span").textContent = item;
        learnList.appendChild(li);
      });
    }

    var enroll = document.getElementById("course-enroll");
    if (enroll) {
      var base = window.ISCHOOL_WHATSAPP || "https://wa.me/201068867161";
      enroll.href =
        base +
        "?text=" +
        encodeURIComponent("Hi iSchool, I would like to enroll in: " + course.title);
    }

    document.title = course.title + " | iSchool";
  });
})();
