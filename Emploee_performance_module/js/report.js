document.addEventListener("DOMContentLoaded", () => {
    const goals = JSON.parse(localStorage.getItem("goals")) || [];
    const feedbacks = JSON.parse(localStorage.getItem("feedbacks")) || [];
  
    // ---- Goal Completion Chart ----
    const totalGoals = goals.length;
    const completedGoals = goals.filter(goal => goal.completed).length;
    const goalCtx = document.getElementById("goalChart").getContext("2d");
  
    new Chart(goalCtx, {
      type: "doughnut",
      data: {
        labels: ["Completed", "Pending"],
        datasets: [{
          data: [completedGoals, totalGoals - completedGoals],
          backgroundColor: ["#4CAF50", "#F44336"]
        }]
      }
    });
  
    // ---- Feedback Chart ----
    const feedbackCounts = {
      Positive: 0,
      Neutral: 0,
      Negative: 0
    };
  
    feedbacks.forEach(feedback => {
      if (feedback.type === "Positive") feedbackCounts.Positive++;
      else if (feedback.type === "Neutral") feedbackCounts.Neutral++;
      else feedbackCounts.Negative++;
    });
  
    const feedbackCtx = document.getElementById("feedbackChart").getContext("2d");
  
    new Chart(feedbackCtx, {
      type: "bar",
      data: {
        labels: ["Positive", "Neutral", "Negative"],
        datasets: [{
          label: "Feedback Summary",
          data: [feedbackCounts.Positive, feedbackCounts.Neutral, feedbackCounts.Negative],
          backgroundColor: ["#4CAF50", "#FFEB3B", "#F44336"]
        }]
      }
    });
  });
  