// Parse URL search params
const params = new URLSearchParams(window.location.search);
const name = params.get("name");
const email = params.get("email");
const message = params.get("message");

// Display greeting with name
if (name) {
  document.getElementById("greeting").textContent = `${name}! Your message has been received.`;
}

// Show details if available
let detailsHTML = "";
if (email) {
  detailsHTML += `<p><span class="highlight">Email:</span> ${email}</p>`;
}
if (message) {
  detailsHTML += `<p><span class="highlight">Message:</span> ${message}</p>`;
}

document.getElementById("details").innerHTML = detailsHTML;
