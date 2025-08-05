async function getDiscoveries() {
  const data = await fetch("data/places.json");
  const response = await data.json();
  
  return response.places;
}

document.addEventListener("DOMContentLoaded", async () => {
  const discoveries = await getDiscoveries();

  discoveries.forEach((discovery) => createCard(discovery));
})

function createCard(data){
  const cardContainer = document.createElement("div");
  const cardTitle = document.createElement("h2");
  const cardDescription = document.createElement("p");
  const cardAddress = document.createElement("address");
  const cardImage = document.createElement("img");
  const cardButton = document.createElement("button");

  cardContainer.className = "card";
  cardImage.src = `images/${data.image}`;
  cardImage.width = 300;
  cardImage.height = 200;
  cardImage.loading = "lazy";
  cardImage.alt = data.title;

  cardTitle.textContent = data.title;
  cardDescription.textContent = data.description;
  cardAddress.textContent = data.address;
  cardButton.textContent = "Learn More";

  cardContainer.appendChild(cardImage);
  cardContainer.appendChild(cardTitle);
  cardContainer.appendChild(cardAddress);
  cardContainer.appendChild(cardDescription);
  cardContainer.appendChild(cardButton);

  document.querySelector("#discover-cards").appendChild(cardContainer);
};