(function () {
  "use strict";

  // Demo accounts that always work.
  var DEFAULT_USERS = [
    { name: "Test Student", email: "test1@example.com", password: "123456" },
    { name: "iSchool Admin", email: "admin@ischool.com", password: "admin123" },
    { name: "Demo User", email: "user@domain.com", password: "pass1234" }
  ];

  function getStoredUsers() {
    try {
      var raw = localStorage.getItem("ischool_users");
      return raw ? JSON.parse(raw) : [];
    } catch (error) {
      return [];
    }
  }

  function showMessage(text, type) {
    var el = document.getElementById("loginMessage");
    if (!el) return;
    el.textContent = text || "";
    el.className = "login-msg" + (type ? " " + type : "");
  }

  function init() {
    var form = document.getElementById("loginForm");
    var emailInput = document.getElementById("email");
    var passwordInput = document.getElementById("password");
    if (!form || !emailInput || !passwordInput) return;

    try {
      if (new URLSearchParams(window.location.search).get("registered") === "1") {
        showMessage("Account created successfully. Please log in.", "success");
      }
    } catch (error) {
      /* ignore malformed query strings */
    }

    form.addEventListener("submit", function (event) {
      event.preventDefault();

      var email = emailInput.value.trim().toLowerCase();
      var password = passwordInput.value;

      if (!email || !password) {
        showMessage("Please enter your email and password.", "error");
        return;
      }

      var users = DEFAULT_USERS.concat(getStoredUsers());
      var found = users.some(function (user) {
        return String(user.email).toLowerCase() === email && user.password === password;
      });

      if (found) {
        showMessage("Welcome back! Redirecting…", "success");
        window.location.href = "./index.html";
      } else {
        showMessage("Incorrect email or password. Please try again.", "error");
        passwordInput.focus();
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();

// شكل العين
function togglePassword() {
  var passwordInput = document.getElementById("password");
  var toggleIcon = document.getElementById("toggleIcon");
  if (!passwordInput || !toggleIcon) return;

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    toggleIcon.classList.remove("fa-eye");
    toggleIcon.classList.add("fa-eye-slash");
  } else {
    passwordInput.type = "password";
    toggleIcon.classList.remove("fa-eye-slash");
    toggleIcon.classList.add("fa-eye");
  }
}
