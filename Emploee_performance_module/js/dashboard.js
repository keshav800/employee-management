document.addEventListener("DOMContentLoaded", () => {
    const user = JSON.parse(localStorage.getItem("user"));
  
    if (user) {
      document.getElementById("empName").textContent = user.name;
      document.getElementById("empEmail").textContent = user.email;
      document.getElementById("empId").textContent = user.empId;
    } else {
      // If no user data found, redirect to login
      alert("Please log in first.");
      window.location.href = "index.html";
    }
  });
  