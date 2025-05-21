function displayTemperature(response) {
  let temperatureElement = document.querySelector("#current-temperature");
  let temperature = Math.round(response.data.temperature.current);
  let cityElement = document.querySelector("#current-city");
  let descriptionElement=document.querySelector('#description');
  let humidityElement=document.querySelector('#humidity');
  let windSpeedElement=document.querySelector('#wind-speed');
  
  windSpeedElement.innerHTML=response.data.wind.speed;
  humidityElement.innerHTML=response.data.temperature.humidity;
  descriptionElement.innerHTML=response.data.condition.description;
  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = temperature;
}

function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let city = searchInputElement.value;

  let apiKey = "37o01tf961eb43e8aa46dbf5fa9e5225";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayTemperature);
}

let  now = new Date();
let time = now.toDateString();

document.getElementById("current-time").innerHTML = " " +time;

axios.get('https://api.openweathermap.org/data/2.5/weather?q=London&appid=37o01tf961eb43e8aa46dbf5fa9e5225')
  .then(function(response) {
   let weather = response.data.weather[0];
   let iconCode = weather.icon;
   let  iconUrl = 'http://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-day.png/' + iconCode + '.png';
  document.getElementById('icon img').src = iconUrl;
  document.getElementById('description').textContent = weather.main;
  })
   .catch(function(error) {
    console.log('Error fetching weather data:', error);
  });


let weatherIcon = document.querySelector('.icon img');


function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);
let currentDateELement = document.querySelector("#current-date");
let currentDate = new Date();
currentDateELement.innerHTML=formatDate(currentDate);

