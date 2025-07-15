const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData (){
  const response = await fetch(url);
  const data = await response.json();

  // console.table(data);
  displayProphets(data.prophets);
}

function displayProphets(prophets){
  prophets.forEach((prophet) => {
    const card = document.createElement("section");
    const fullName = document.createElement("h2");
    const portrait = document.createElement("img");

    fullName.textContent = `${prophet.name} ${prophet.lastname}`;

    portrait.src = prophet.imageurl;
    portrait.alt = `${prophet.name} ${prophet.lastname}`;
    portrait.loading = "lazy";
    portrait.width = 320;
    portrait.height = 395;

    card.appendChild(fullName);
    card.appendChild(portrait);

    cards.appendChild(card);
  })
}

getProphetData();