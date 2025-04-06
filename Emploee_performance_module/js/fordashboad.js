// js/login.js

function loginUser(event) {
    event.preventDefault();
  
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    if (email === "admin@gofloww.com" && password === "123456") {
      window.location.href = "dashboard.html";
    } else {
      alert("Invalid email or password!");
    }
  }
  