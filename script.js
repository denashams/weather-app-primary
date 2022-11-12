let now = new Date();

let weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let date = now.getDate();
let day = weekDays[now.getDay()];
let year = now.getFullYear();
let month = months[now.getMonth()];
let dateTime = document.querySelector(".date-time");
dateTime.innerHTML = `${day}, ${date}, ${month} ${year}`;

function showTemp(response) {
  document.querySelector("h1").innerHTML = response.data.name;
  document.querySelector(".temp").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#wind-speed").innerHTML = response.data.wind.speed;
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#weather-description").innerHTML =
    response.data.weather[0].description;
  // console.log(response.data);
}

function showCity(event) {
  event.preventDefault();

  let city = document.querySelector("#city-value").value;
  let apiKey = "f62ff249a72da3b34cec98a655e25650";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemp);
}

function getLocation(position) {
  let lat = position.coords.latitude;
  let long = position.coords.longitude;

  let apiKey = "f62ff249a72da3b34cec98a655e25650";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon=${lon}&appid=${apiKey}`;
  axios.get(apiUrl).then(displayCurrentWeather);
}

function displayCurrentWeather(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(getLocation);
}

let cityForm = document.querySelector("#search-city-form");
cityForm.addEventListener("submit", showCity);

let currentButton = document.querySelector("#current-button");
currentButton.addEventListener("click", displayCurrentWeather);
