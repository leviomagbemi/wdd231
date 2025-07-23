// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = "https://api.openweathermap.org/data/2.5/weather?lat=5.548222371184704&lon=5.76555713104862&appid=43bf94de50c8a5ff3461af3f8776712e";

async function apiFetch(){
  try {
    const response = await fetch(url);
    
    if (response.ok){
      const data = await response.json();
      console.log(data);
      displayResults(data);
    } else {
      throw error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

function displayResults(data) {
  currentTemp.innerHTML = `${data.main.temp}&deg;F`;
  const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  let desc = data.weather[0].description;
  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', data.weather[0].main);
  captionDesc.textContent = `${desc}`;
}
apiFetch();