document.addEventListener("DOMContentLoaded", () => {
  const nameField = document.querySelector('input[type="text"]');
  const emailField = document.querySelector('input[type="email"]');
  const timestampField = document.getElementById("timestamp");
  const form = document.querySelector("form");

  // Restore name and email if available
  const savedName = localStorage.getItem("contact_name");
  const savedEmail = localStorage.getItem("contact_email");

  if (savedName) nameField.value = savedName;
  if (savedEmail) emailField.value = savedEmail;

  // Add timestamp when page loads
  timestampField.value = new Date().toISOString();

  // On form submit, save name, email, and timestamp to localStorage
  form.addEventListener("submit", () => {
    localStorage.setItem("contact_name", nameField.value);
    localStorage.setItem("contact_email", emailField.value);
    localStorage.setItem("contact_timestamp", timestampField.value);
  });
});
