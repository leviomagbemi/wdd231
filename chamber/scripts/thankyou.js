const submissionDetails = new URLSearchParams(window.location.search);

const firstName = submissionDetails.get("first");
const lastName = submissionDetails.get("last");
const email = submissionDetails.get("email");
const phone = submissionDetails.get("phone");
const title = submissionDetails.get("title");
const organization = submissionDetails.get("organization");
const timestamp = submissionDetails.get("timestamp");

document.querySelector("#results").innerHTML = `
<p>Membership Details of ${firstName} ${lastName}</p>
<p>Submitted on ${timestamp}</p>
<p>Your Email: ${email}</p>
<p>Your Phone: ${phone}</p>
<p>Your Title: ${title}</p>
<p>Your Organization: ${organization}</p>
`;