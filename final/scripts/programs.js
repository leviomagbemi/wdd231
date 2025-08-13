const programs = document.querySelector("#programs-container");

async function getPrograms(){
  try {
    const response = await fetch("data/programs.json");
    const result = await response.json();

    return result;
  } catch (error) {
    throw error;
  }
  
}

document.addEventListener("DOMContentLoaded", async () => {
  const programs = await getPrograms();

  programs.forEach((program) => {
    createProgram(program);
  })
})

function createProgram(program){
  const programsCard = document.createElement("div");
  const programsInfo = document.createElement("div");
  const image = document.createElement("img");
  const title = document.createElement("h3");
  const description = document.createElement("p");

  programsCard.className = "programs-card";
  programsInfo.className = "info";

  image.src = `${program.image}`;
  image.width = 300;
  image.height = 200;
  image.loading = "lazy";
  image.alt = program.title;

  title.textContent = program.title;
  description.textContent = program.description;

  programsCard.appendChild(image);
  programsInfo.appendChild(title);
  programsInfo.appendChild(description);
  programsCard.appendChild(programsInfo);

  programs.appendChild(programsCard);
}

getPrograms();