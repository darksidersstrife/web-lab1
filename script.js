const weatherTemplate = doT.template(document.getElementById('weatherTemplate').text);
const cityNotFoundTemplate = doT.template(document.getElementById('cityNotFoundTemplate').text);
const errorTemplate = doT.template(document.getElementById('errorTemplate').text);

function getWeather(event) {
    let content = document.getElementById('weather');
    event.preventDefault();
    if (cityName === "") {
        return
    }
    const request = new XMLHttpRequest();
    request.open('GET', 'http://api.openweathermap.org/data/2.5/weather?units=metric&appid=743425b4595f21f19d34ea81bf8f2f5c&q=' + cityName, false);
    request.send();
    if (request.status === 200) {
        response = JSON.parse(request.responseText);
        const weather = {
            city: response.name,
            temp: response.main.temp,
            minTemp: response.main.temp_min,
            maxTemp: response.main.temp_max,
            windSpeed: response.wind.speed,
            sky: response.weather[0].description,
            pressure: response.main.pressure,
            humidity: response.main.humidity,
        };
        content.innerHTML = weatherTemplate(weather);
    } else {
        if (request.status === 404) {
            content.innerHTML = cityNotFoundTemplate({city: cityName});
        } else {
            content.innerHTML = errorTemplate({errorText: request.statusText, errorCode: request.status});
        }
    }
}