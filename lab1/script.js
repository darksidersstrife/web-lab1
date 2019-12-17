const weatherTemplate = doT.template(document.getElementById('weatherTemplate').text);
const cityNotFoundTemplate = doT.template(document.getElementById('cityNotFoundTemplate').text);
const errorTemplate = doT.template(document.getElementById('errorTemplate').text);

function handleSubmit(event) {
    event.preventDefault();
    let cityName = event.target.city.value;
    if (cityName === "") {
        return
    }
    render(getWeather(cityName), cityName)
}

function getWeather(cityName) {
    let request = new XMLHttpRequest();
    request.open('GET', 'http://api.openweathermap.org/data/2.5/weather?units=metric&appid=743425b4595f21f19d34ea81bf8f2f5c&q=' + cityName, false);
    request.send();
    if (request.status === 200) {
        let response = JSON.parse(request.responseText);
        return {
            city: response.name,
            temp: response.main.temp,
            minTemp: response.main.temp_min,
            maxTemp: response.main.temp_max,
            windSpeed: response.wind.speed,
            sky: response.weather[0].description,
            pressure: response.main.pressure,
            humidity: response.main.humidity,
            error : null
        };
    } else {
        if (request.status === 404) {
            return { error : 'NotFound' }
        } else {
            return { error : request.statusText}
        }
    }
}

function render(weather, cityName) {
    let content = document.getElementById('weather');
    if (weather.error === null) {
        content.innerHTML = weatherTemplate(weather);
    } else {
        if (weather.error === 'NotFound') {
            content.innerHTML = cityNotFoundTemplate({city: cityName});
        } else {
            content.innerHTML = errorTemplate({errorText: request.statusText, errorCode: request.status});
        }
    }
}