conf = require('../config');
fetch = require('node-fetch');

module.exports =  function(router) {
    router.get('/weather', function(req, res) {

        if (!req.query.name) {
            res.status(400).send("No name provided")
        } else {
            console.log(`${conf.apiUrl}&appid=${conf.token}&q=${req.query.name}`);
            fetch(`${conf.apiUrl}&q=${req.query.name}&appid=${conf.token}`)
                .then((response => response.json()))
                .then(weather => res.status(weather.cod).send(weather))
                .catch(err => res.send(`Error: ${err.toString()}`));
        }
    });

    router.get('/weather/coordinates', function(req, res) {
        if (!req.query.lat) {
            res.status(400).send("No lat provided")
        } else if (!req.query.lon) {
            res.status(400).send("No lon provided")
        } else {
            console.log(`${conf.apiUrl}&appid=${conf.token}&lat=${req.query.lat}&lon=${req.query.lon}`);
            fetch(`${conf.apiUrl}&appid=${conf.token}&lat=${req.query.lat}&lon=${req.query.lon}`)
                .then(response => response.json())
                .then(weather => res.status(weather.cod).send(weather))
                .catch(err => res.send(`Error: ${err.toString()}`));
        }
    });

};