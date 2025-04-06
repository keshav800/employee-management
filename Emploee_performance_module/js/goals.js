document.addEventListener("DOMContentLoaded", () => {
    const goalForm = document.getElementById("goalForm");
    const goalList = document.getElementById("goalList");
  
    let goals = JSON.parse(localStorage.getItem("goals")) || [];
    const user = JSON.parse(localStorage.getItem("user"));
  
    if (!user) {
      alert("Please login first.");
      window.location.href = "index.html";
    }
  
    function renderGoals() {
      goalList.innerHTML = "";
      goals.forEach((goal, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
          <strong>${goal.title}</strong><br>
          ${goal.description}<br>
          <em>Status: ${goal.completed ? "✅ Completed" : "⏳ In Progress"}</em>
          <br>
          ${!goal.completed ? `<button onclick="markGoalCompleted(${index})">Mark as Completed</button>` : ""}
          <hr>
        `;
        goalList.appendChild(li);
      });
    }
  
    window.markGoalCompleted = function (index) {
      goals[index].completed = true;
      localStorage.setItem("goals", JSON.stringify(goals));
      renderGoals();
    };
  
    goalForm.addEventListener("submit", e => {
      e.preventDefault();
  
      const title = document.getElementById("goalTitle").value;
      const description = document.getElementById("goalDesc").value;
  
      const newGoal = {
        title,
        description,
        completed: false,
        owner: user.email
      };
  
      goals.push(newGoal);
      localStorage.setItem("goals", JSON.stringify(goals));
      renderGoals();
      goalForm.reset();
    });
  
    renderGoals();
  });
  