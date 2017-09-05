var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var avengers_original = require('./model/avengers')


var port = process.env.port || 3000;
var avengers = JSON.parse(JSON.stringify(avengers_original));

app.use(bodyParser.json());

app.get('/getAvengersList', function(req, res) {
    console.log(avengers.length);
    res.send(avengers);
});

app.get('/getAvenger/:index', function(req, res) {
    let index = req.params.index;
    if (index >= 0 && index < avengers.length) {
        res.send(avengers[index])
    } else {
        res.send("null")
    }
});

app.put('/updateAvenger', function(req, res) {
    let avenger = req.body.avenger;
    let index = req.body.index;

    if (index >= 0 && index < avengers.length) {
        avengers[index] = avenger;
        res.send(true);
    } else {
        res.send(false);
    }
});

app.get('/deleteAvenger/:index', function(req, res) {
    let index = req.params.index;
    if (index >= 0 && index < avengers.length) {
        avengers.splice(index, 1);
        res.send(true);
    } else {
        res.send(false);
    }
});

app.post('/addAvenger', function(req, res) {
    let avenger = req.body.avenger;
    avenger.id = avengers.length + 1;
    avengers.push(avenger);
    res.send(true);
});

app.get('/reset', function(req, res) {
    avengers = JSON.parse(JSON.stringify(avengers_original));
    res.send(true);
});


app.listen(port, function() {
    console.log("Application started on port :: " + port);
})