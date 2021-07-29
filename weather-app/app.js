const apikey = "3265874a2c77ae4a04bb96236a642d2f";

const url = (city) =>
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;

// const IMGPATH = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

const form = document.getElementById("form");
const search = document.getElementById("search");
const searchBtn = document.getElementById("searchBtn");
const main = document.querySelector(".main");

async function getWeather(location) {

    const resp = await fetch(url(location));
    const respData = await resp.json();

    console.log(respData);
    getWeatherDetails(respData);

}


function searchWeatherByCity() {

    form.addEventListener('submit', (e) => {

        e.preventDefault();
        const searchVal = search.value;

        if (searchVal) {
            getWeather(searchVal);
            search.value = "";
        }


    });

    searchBtn.addEventListener('click', () => {

        const searchVal = search.value;
        getWeather(searchVal);
        search.value = "";
    });


}

function getWeatherDetails(data) {

    main.innerHTML = ``;

    const div = document.createElement("div");
    div.classList.add("weather-container");
    div.innerHTML = `
        <h2 class="title">${data.name}</h2>
        <div class="temperature">
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">
            <h2>${data.main.temp} &#8451</h2>
            <h3>${data.weather[0].main}</h3>
            <h5>${data.weather[0].description}</h5>
        </div>

        <div class="whp">
            <div class="wind">
                <i class="fas fa-wind"></i>
                <h5>${data.wind.speed} m/s</h5>
            </div>
            <div class="humidity">
                <img src="./images/opacity_black_24dp.svg">
                <h5>${data.main.humidity} %</h5>
            </div>
            <div class="pressure">
                <img src="./images/device_thermostat_black_24dp.svg">
                <h5>${data.main.pressure} hPa</h5>
            </div>
        </div>    
    `;

    main.appendChild(div);
}

searchWeatherByCity();