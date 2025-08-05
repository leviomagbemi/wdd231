(function () {
  const messageContainer = document.getElementById("visit-message");
  const lastVisitKey = "lastVisitDate";
  const now = new Date();
  const msInDay = 1000 * 60 * 60 * 24;

  const lastVisit = localStorage.getItem(lastVisitKey);

  let message = "";

  if (!lastVisit) {
    // First-time visitor
    message = "Welcome! Let us know if you have any questions.";
  } else {
    const lastVisitDate = new Date(lastVisit);
    const timeDifference = now - lastVisitDate;
    const daysDifference = Math.floor(timeDifference / msInDay);

    if (daysDifference < 1) {
      message = "Back so soon! Awesome!";
    } else if (daysDifference === 1) {
      message = "You last visited 1 day ago.";
    } else {
      message = `You last visited ${daysDifference} days ago.`;
    }
  }

  // Display the message in the sidebar
  messageContainer.textContent = message;

  // Update the last visit timestamp
  localStorage.setItem(lastVisitKey, now.toISOString());
})();
