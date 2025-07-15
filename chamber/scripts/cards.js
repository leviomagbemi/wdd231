const cards = document.querySelector("#cards");
const gridBtn = document.querySelector("#grid-view-btn");
const listBtn = document.querySelector("#list-view-btn");

let members;

document.addEventListener("DOMContentLoaded",async () => {
  members = await getMembers();

  members.businesses.forEach((business) => createGridCard(business, members.membershipLevels));
})

async function getMembers(){
  const data = await fetch("data/members.json");
  const response = await data.json();

  return response;
}

gridBtn.addEventListener("click", async() => {
  listBtn.classList.remove("current");
  gridBtn.classList.add("current");
  cards.classList.remove("list");
  cards.innerHTML = ""
  members.businesses.forEach((business) => createGridCard(business, members.membershipLevels));
});

listBtn.addEventListener("click", async() => {
  gridBtn.classList.remove("current");
  listBtn.classList.add("current");
  cards.classList.add("list");
  cards.innerHTML = ""
  members.businesses.forEach((business) => createListCard(business));
});

function createGridCard(business, membership){
  const membershipDetails = membership[business.membershipLevel];

  // Create all elements
  const card = document.createElement("div");

  const cardHeader = document.createElement("div");
  const cardImage = document.createElement("img");
  const cardHeading = document.createElement("h2");
  const cardCategory = document.createElement("p");

  const cardInfo = document.createElement("div");
  const cardDescription = document.createElement("p");

  // Contact information element
  const cardContactList = document.createElement("ul");
  const cardAddress = document.createElement("li");
  const cardPhone = document.createElement("li");
  const cardUrl = document.createElement("li");
  const cardEmail = document.createElement("li");

  const cardServices = document.createElement("div");
  const cardSerivceHeading = document.createElement("h3"); 
  const cardServiceList = document.createElement("ul");

  const cardCta = document.createElement("a");

  const cardBadge = document.createElement("span");

  // Set all attributes and text content
  card.className = "card";
  card.id = "grid-card";
  cardHeader.className = "card-header";
  cardImage.width = 100;
  cardImage.height = 100;
  cardImage.loading = "lazy"
  cardImage.src = business.image;
  cardImage.alt = business.name;
  cardHeading.textContent = business.name;
  cardCategory.textContent = business.category;
  cardInfo.className = "card-info";
  cardDescription.textContent = business.description;
  cardAddress.textContent = business.address;
  cardAddress.style.listStyleImage = "url(images/location-icon.svg)";
  cardPhone.textContent = business.phone;
  cardPhone.style.listStyleImage = "url(images/phone-icon.svg)";
  cardUrl.textContent = business.website;
  cardUrl.style.listStyleImage = "url(images/globe-icon.svg)";
  cardEmail.textContent = business.email;
  cardEmail.style.listStyleImage = "url(images/envelope-icon.svg)";
  cardServices.className = "services";
  cardSerivceHeading.textContent = "Services";
  cardCta.className = "card-cta";
  cardCta.textContent = "Visit Website";
  cardCta.href = business.website;
  cardCta.target = "blank";
  cardBadge.id = "badge"
  cardBadge.textContent = membershipDetails.name;
  cardBadge.style.backgroundColor = membershipDetails.backgroundColor;
  cardBadge.style.color = membershipDetails.color;
  cardBadge.style.borderColor = membershipDetails.borderColor;

  // Append Elements
  cardHeader.appendChild(cardImage);
  cardHeader.appendChild(cardHeading);
  cardHeader.appendChild(cardCategory);

  cardContactList.appendChild(cardAddress);
  cardContactList.appendChild(cardPhone);
  cardContactList.appendChild(cardUrl);
  cardContactList.appendChild(cardEmail);

  business.services.forEach((service) => {
    const cardService = document.createElement("li");
    cardService.textContent = service;
    cardServiceList.appendChild(cardService);
  });

  cardServices.appendChild(cardSerivceHeading);
  cardServices.appendChild(cardServiceList);

  cardInfo.appendChild(cardDescription);
  cardInfo.appendChild(cardContactList);
  cardInfo.appendChild(cardServices);
  cardInfo.appendChild(cardCta);
  cardInfo.appendChild(cardBadge);

  card.appendChild(cardHeader);
  card.appendChild(cardInfo);

  cards.append(card);
}

function createListCard(business){
  // Create all elements
  const card = document.createElement("div");

  const cardHeader = document.createElement("div");
  const cardImage = document.createElement("img");
  const cardHeading = document.createElement("h2");
  const cardCategory = document.createElement("p");

  const cardInfo = document.createElement("div");

  // Contact information element
  const cardContactList = document.createElement("ul");
  const cardAddress = document.createElement("li");
  const cardPhone = document.createElement("li");
  const cardUrl = document.createElement("li");
  const cardEmail = document.createElement("li");


  const cardCta = document.createElement("a");


  // Set all attributes and text content
  card.className = "card";
  card.id = "list-card";
  cardHeader.className = "card-header";
  cardImage.width = 100;
  cardImage.height = 100;
  cardImage.loading = "lazy"
  cardImage.src = business.image;
  cardImage.alt = business.name;
  cardHeading.textContent = business.name;
  cardCategory.textContent = business.category;
  cardInfo.className = "card-info";
  cardAddress.textContent = business.address;
  cardAddress.style.listStyleImage = "url(images/location-icon.svg)";
  cardPhone.textContent = business.phone;
  cardPhone.style.listStyleImage = "url(images/phone-icon.svg)";
  cardUrl.textContent = business.website;
  cardUrl.style.listStyleImage = "url(images/globe-icon.svg)";
  cardEmail.textContent = business.email;
  cardEmail.style.listStyleImage = "url(images/envelope-icon.svg)";
  cardCta.className = "card-cta";
  cardCta.textContent = "Visit Website";
  cardCta.href = business.website;
  cardCta.target = "blank";

  // Append Elements
  cardHeader.appendChild(cardHeading);
  cardHeader.appendChild(cardCategory);

  cardContactList.appendChild(cardAddress);
  cardContactList.appendChild(cardPhone);
  cardContactList.appendChild(cardUrl);
  cardContactList.appendChild(cardEmail);

  cardInfo.appendChild(cardHeader);
  cardInfo.appendChild(cardContactList);
  cardInfo.appendChild(cardCta);

  card.appendChild(cardInfo);
  card.appendChild(cardImage);
  
  cards.append(card);
}