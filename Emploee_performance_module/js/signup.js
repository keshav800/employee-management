function signupUser(event) {
    event.preventDefault(); // Stop form from reloading page
  
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const employeeId = document.getElementById("employeeId").value;
    const password = document.getElementById("password").value;
  
    const user = {
      name: name,
      email: email,
      employeeId: employeeId,
      password: password
    };
  
    // Save to localStorage
    localStorage.setItem("user", JSON.stringify(user));
  
    alert("Signup successful! Redirecting to login...");
    window.location.href = "index.html"; // Go to login page
  }
  