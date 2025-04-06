document.addEventListener("DOMContentLoaded", () => {
    const feedbackForm = document.getElementById("feedbackForm");
    const feedbackList = document.getElementById("feedbackList");
  
    let feedbacks = JSON.parse(localStorage.getItem("feedbacks")) || [];
  
    // Show existing feedbacks
    feedbacks.forEach(fb => {
      const li = document.createElement("li");
      li.textContent = `${fb.from} ➡️ ${fb.to}: ${fb.message}`;
      feedbackList.appendChild(li);
    });
  
    // Handle form submission
    feedbackForm.addEventListener("submit", e => {
      e.preventDefault();
  
      const user = JSON.parse(localStorage.getItem("user"));
      const to = document.getElementById("to").value;
      const message = document.getElementById("message").value;
  
      const newFeedback = {
        from: user.email,
        to,
        message
      };
  
      feedbacks.push(newFeedback);
      localStorage.setItem("feedbacks", JSON.stringify(feedbacks));
  
      // Show on page
      const li = document.createElement("li");
      li.textContent = `${newFeedback.from} ➡️ ${newFeedback.to}: ${newFeedback.message}`;
      feedbackList.appendChild(li);
  
      feedbackForm.reset();
      alert("✅ Feedback submitted!");
    });
  });
  function submitFeedback() {
    const target = document.getElementById("targetEmployee").value;
    const relationship = document.getElementById("relationship").value;
    const feedback = document.getElementById("feedbackText").value;
  
    const entry = {
      target,
      relationship,
      feedback,
      submittedBy: JSON.parse(localStorage.getItem("user")).email,
      timestamp: new Date().toISOString()
    };
  
    let allFeedback = JSON.parse(localStorage.getItem("feedbackData")) || [];
    allFeedback.push(entry);
    localStorage.setItem("feedbackData", JSON.stringify(allFeedback));
  
    alert("✅ Feedback submitted!");
    document.getElementById("feedbackText").value = "";
  }
  