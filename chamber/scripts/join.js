const membershipLevels = {
  nonProfit: {
    title: "Non-Profit Membership Level",
    tagline: "Support. Connect. Make an Impact.",
    description:
      "Our Non-Profit Membership is specifically designed to empower organizations that serve the public good. We understand the challenges non-profits face, and we’re here to help amplify your impact."
  },

  bronze: {
    title: "Bronze Membership Level",
    tagline: "A Solid Start for Small Businesses.",
    description:
      "Ideal for startups, solo entrepreneurs, and small businesses taking their first step into the community, the Bronze Membership offers essential tools to grow and connect."
  },

  silver: {
    title: "Silver Membership Level",
    tagline: "Expand Your Reach. Strengthen Your Network.",
    description:
      "The Silver Membership is designed for growing businesses ready to increase their visibility and community presence while gaining deeper engagement opportunities."
  },

  gold: {
    title: "Gold Membership Level",
    tagline: "Lead. Influence. Make a Bold Statement.",
    description:
      "Our Gold Membership is perfect for established businesses and community leaders seeking a high-impact role in local economic development and decision-making.",
  }
};

const levelsCta = document.querySelectorAll("#levels a");
const membershipDetails = document.querySelector("#membership-details");
const membershipForm = document.querySelector("form");

levelsCta.forEach((cta) => {
  cta.addEventListener("click", (e) => {
    e.preventDefault();

    const levelDetails = membershipLevels[cta.id];
    renderDetails(levelDetails);
  })
});

function renderDetails (levelDetails) {
  membershipDetails.innerHTML = ``;
  const header = document.createElement("div");
  const closeBtn = document.createElement("button");
  const heading = document.createElement("h3");
  const tagline = document.createElement("small");
  const description = document.createElement("p");

  closeBtn.textContent = "Close";
  heading.textContent = levelDetails.title;
  tagline.textContent = levelDetails.tagline;
  description.textContent = levelDetails.description;
  
  header.appendChild(heading);
  header.appendChild(closeBtn);

  membershipDetails.appendChild(header);
  membershipDetails.appendChild(tagline);
  membershipDetails.appendChild(description);

  membershipDetails.showModal();

  closeBtn.addEventListener("click", () => {
    membershipDetails.close();
  });
}

membershipForm.addEventListener("submit", () => {
  document.querySelector("#timestamp").value = new Date().toLocaleString("en-GB", {
    weekday: "long",      // e.g. Tuesday
    day: "2-digit",       // e.g. 28
    month: "long",        // e.g. March
    year: "numeric",      // e.g. 2025
    hour: "2-digit",      // e.g. 08
    minute: "2-digit",    // e.g. 15
    second: "2-digit",    // e.g. 42
    hour12: true,        // 12-hour time format
    timeZone: "Africa/Lagos"
  });
});