function loginUser(event) {
    event.preventDefault();
  
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    const user = JSON.parse(localStorage.getItem("user"));
  
    if (user && email === user.email && password === user.password) {
      window.location.href = "dashboard.html";
    } else {
      alert("Invalid email or password!");
    }
  }
  