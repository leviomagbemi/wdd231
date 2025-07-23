const urlCurrentWeather = "https://api.openweathermap.org/data/2.5/weather?lat=5.548222371184704&lon=5.76555713104862&appid=43bf94de50c8a5ff3461af3f8776712e";
const forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=5.548222371184704&lon=5.76555713104862&cnt=6&appid=43bf94de50c8a5ff3461af3f8776712e"

const currentWeather = document.querySelector("#current-weather");
const weatherForecast = document.querySelector(".weather-forecast");

const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]


async function apiFetch(url){
  try {
    const response = await fetch(url);
    
    if (response.ok){
      const data = await response.json();
      return data;
    } else {
      throw error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

document.addEventListener("DOMContentLoaded", async () => {
  const currentWeather = await apiFetch(urlCurrentWeather);
  const weatherForecast = await apiFetch(forecastUrl);
  renderCurrentWeather(currentWeather);
  renderWeatherForecast(weatherForecast);
});

function renderCurrentWeather(data){
  const ul = document.createElement("ul");
  const icon = document.createElement("img");
  const main = document.createElement("li");
  const description = document.createElement("li");
  const high = document.createElement("li");
  const low = document.createElement("li");
  const humidity = document.createElement("li");
  const sunrise = document.createElement("li");
  const sunset = document.createElement("li");

  main.textContent = `${data.main.temp}°F`;
  description.textContent = data.weather[0].description;
  high.textContent = `High: ${data.main.temp_max}°`;
  low.textContent = `Low: ${data.main.temp_min}°`;
  humidity.textContent = `Humidity: ${data.main.humidity}%`;
  sunrise.textContent = `Sunrise: ${convertUnixToLocalTime(data.sys.sunrise, data.timezone)}`;
  sunset.textContent = `Sunset: ${convertUnixToLocalTime(data.sys.sunset, data.timezone)}`;

  icon.src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  icon.alt = data.weather[0].description;

  ul.appendChild(main);
  ul.appendChild(description);
  ul.appendChild(high);
  ul.appendChild(low);
  ul.appendChild(humidity);
  ul.appendChild(sunrise);
  ul.appendChild(sunset);

  currentWeather.appendChild(icon);
  currentWeather.appendChild(ul);
};

function renderWeatherForecast(data){
  const dataList = data.list
  const ul = document.createElement("ul");

  dataList.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${getDay(item.dt_txt)} - ${convertUnixToLocalTime(item.dt, data.city.timezone)}: ${item.main.temp}°F`;

    ul.appendChild(li);
  });

  weatherForecast.appendChild(ul);
};

function convertUnixToLocalTime(timestamp, offsetInSeconds) {
  const date = new Date((timestamp + offsetInSeconds) * 1000);
  return date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
};

function getDay(date){
  const day = new Date(date).getDay();

  return daysOfWeek[day];
};

function getTime(date){
  return new Date(date).toLocaleTimeString();
}