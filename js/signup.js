(function () {
  "use strict";

  // This is a front-end demo: accounts are stored in the browser only.
  var STORAGE_KEY = "ischool_users";

  function getStoredUsers() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch (error) {
      return [];
    }
  }

  function showMessage(text, type) {
    var el = document.getElementById("signupMessage");
    if (!el) return;
    el.textContent = text || "";
    el.className = "login-msg" + (type ? " " + type : "");
  }

  function init() {
    var form = document.getElementById("signupForm");
    var nameInput = document.getElementById("fullName");
    var emailInput = document.getElementById("email");
    var passwordInput = document.getElementById("password");
    if (!form || !nameInput || !emailInput || !passwordInput) return;

    form.addEventListener("submit", function (event) {
      event.preventDefault();

      var name = nameInput.value.trim();
      var email = emailInput.value.trim().toLowerCase();
      var password = passwordInput.value;

      if (name.length < 2) {
        showMessage("Please enter your full name.", "error");
        nameInput.focus();
        return;
      }

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
        showMessage("Please enter a valid email address.", "error");
        emailInput.focus();
        return;
      }

      if (password.length < 8 || !/[A-Z]/.test(password) || !/[0-9]/.test(password)) {
        showMessage("Password must be at least 8 characters and contain an uppercase letter and a number.", "error");
        passwordInput.focus();
        return;
      }

      var users = getStoredUsers();
      var exists = users.some(function (user) {
        return String(user.email).toLowerCase() === email;
      });

      if (exists) {
        showMessage("This email is already registered. Please log in instead.", "error");
        return;
      }

      users.push({ name: name, email: email, password: password });
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
      } catch (error) {
        showMessage("Your browser blocked local storage, so the account could not be saved.", "error");
        return;
      }

      showMessage("Account created successfully. Redirecting to login…", "success");
      window.setTimeout(function () {
        window.location.href = "./login.html?registered=1";
      }, 900);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
