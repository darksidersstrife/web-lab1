var weatherTemplate = doT.template(document.getElementById('weatherTemplate').text);
var cityNotFoundTemplate = doT.template(document.getElementById('cityNotFoundTemplate').text);
var errorTemplate = doT.template(document.getElementById('errorTemplate').text);

function getWeather() {
    var content = document.getElementById('weather');
    var cityName = document.getElementById('city').value;
    if (cityName === "") {
        return
    }
    var request = new XMLHttpRequest();
    request.open('GET', 'http://api.openweathermap.org/data/2.5/weather?units=metric&appid=743425b4595f21f19d34ea81bf8f2f5c&q=' + cityName, false);
    request.send();
    if (request.status === 200) {
        response = JSON.parse(request.responseText);
        var weather = {
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