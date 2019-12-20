var db = require('../db');
var conf = require('../config');
var fetch = require('node-fetch');

module.exports = function (router) {
    router.get('/favorite', function (req, res) {
        db
            .then(c => c.find({},  {projection:{_id: 0}}))
            .then(res => res.toArray())
            .then(docs => res.send(JSON.stringify(docs)))
            .catch(err => red.status(500).send(err.toString()))
    });

    router.put('/favorite', function (req, res) {

        if (!req.body || !req.body.cityName) {
            res.status(400).send('No city provided');
        }

        req.body.cityName = req.body.cityName.toLowerCase();
        db
            .then(weather => db.then(c => c.updateOne({cityName : req.body.cityName}, { "$set" : req.body })))
            .then(() => res.send("ok"))
            .catch(err => res.status(500).send(err.toString()))
    });

    router.post('/favorite', function (req, res) {

        if (!req.body || !req.body.cityName) {
            res.status(400).send('City not provided');
        }

        req.body.cityName = req.body.cityName.toLowerCase();
        db
            .then(c => c.insertOne(req.body))
            .then(() => res.send("ok"))
            .catch(err => res.status(500).send(err.toString()))
    });

    router.delete('/favorite', function (req, res) {

        if (!req.body.name) {
            res.status(400).send('No name provided');
        }

        db
            .then(weather => db.then(c => c.deleteOne({cityName : req.body.name.toLowerCase()})))
            .then(res => { if (res.deletedCount === 0) throw "City not found"; else return null })
            .then(() => res.send("ok"))
            .catch(err => res.status(500).send(err.toString()))
    });
};