const inputBox = document.querySelector(".input-box");
const searchBtn = document.querySelector("#searchBtn");
const weather_img = document.querySelector(".weather-img");
const temperature = document.querySelector(".temperature");
const description = document.querySelector(".description");
const humidity = document.querySelector("#humidity");
const wind = document.querySelector("#wind");
const city_not_found = document.querySelector(".city-not-found");
const weather_body = document.querySelector(".weather-body");

searchBtn.addEventListener("click", function () {
    const city = inputBox.value;
    const api_key = "df5e11ff89e79225b10303d752096be2";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    fetch(url).then(i => i.json()).then(i => {

        if (i.cod == 404) {
            city_not_found.style.display = "block"
            weather_body.style.display = "none";
        }
        else {
            weather_body.style.display = "block";
            city_not_found.style.display = "none";
        };
        temperature.innerHTML = `${(i.main.temp - 273.15).toFixed(0) + "°C"}`;
        description.innerHTML = `${i.weather[0].description}`;

        humidity.innerHTML = `${i.main.humidity + "%"}`;
        wind.innerHTML = `${i.wind.speed + "Km/hr"}`;

        if (i.weather[0].main == "Clouds") {
            weather_img.src = "./images/clouds.png";

        } else if (i.weather[0].main == "Rain") {
            weather_img.src = "./images/rain.png";

        } else if (i.weather[0].main == "Mist") {
            weather_img.src = "./images/mist.png";

        } else if (i.weather[0].main == "Snow") {
            weather_img.src = "./images/snow.png";

        } else if (i.weather[0].main == "Clear") {
            weather_img.src = "./images/clear.png";

        } else if (i.weather[0].main == "Drizzle") {
            weather_img.src = "./images/drizzle.png";

        }

    });


});