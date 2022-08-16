const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const city = document.querySelector('.city');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');
document.querySelector('.city').value = 'Minsk';


async function getWeather() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=en&appid=c948ec2021a62b489af6dba53a834956&units=metric`;
    const res = await fetch(url);
    const data = await res.json();

    weatherIcon.className = 'weather-icon owf';
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);

    temperature.textContent = `${(data.main.temp).toFixed(0)}°C`;
    wind.textContent = `Wind speed: ${Math.floor(data.wind.speed)} m/s`;
    humidity.textContent = `Humidity: ${data.main.humidity}%`;
    weatherDescription.textContent = data.weather[0].description;
}
getWeather();

city.addEventListener('change', getWeather(city.value));

const setCity = (event) => {
    if (event.code === 'Enter') {
        getWeather();
        city.blur();
    }
};

document.addEventListener('DOMContentLoaded', getWeather);
city.addEventListener('keypress', setCity);
    
// function setLocalStorage() {
//     const city = document.querySelector('.city');
//     localStorage.setItem('city', city.value);
// }

// window.addEventListener('beforeunload', setLocalStorage);

// function getLocalStorage() {
//     const city = document.querySelector('.city');
//     if(localStorage.getItem('city')) {
//       city.value = localStorage.getItem('city');
//     }
// }
// window.addEventListener('load', getLocalStorage);
