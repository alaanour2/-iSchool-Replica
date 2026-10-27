(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    var container = document.getElementById("courses-container");
    if (!container || !window.ISCHOOL_COURSES) return;

    var html = window.ISCHOOL_COURSES.map(function (course) {
      var detailUrl = "./datacours.html?course=" + encodeURIComponent(course.id);
      return (
        '<article class="course-card">' +
        '<img src="' + course.image + '" alt="' + course.title + '" class="card-image" loading="lazy">' +
        '<div class="card-content">' +
        '<span class="card-category">' + course.category + "</span>" +
        '<h3 class="card-title">' + course.title + "</h3>" +
        '<p class="card-description">' + course.summary + "</p>" +
        '<a href="' + detailUrl + '" class="card-button">View course</a>' +
        "</div>" +
        "</article>"
      );
    }).join("");

    container.innerHTML = html;
  });
})();
