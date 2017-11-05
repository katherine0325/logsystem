var express = require('express')
var app = express()
var path = require('path')
var mongoose = require('mongoose')
var bodyParser = require('body-parser')
var moment = require('moment')

app.set('port', process.env.PORT || 3011);

app.use(express.static(path.join(__dirname, 'www')));
app.use(bodyParser.json({limit: '1mb'}));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, 'index.html'));
})

/**
 * API
 */
app.get('/api/:controller/:measure', function(req, res, next) {
	var file = require(`./server/controllers/${req.params.controller}`);
	file = new file();
	return file[req.params.measure](req, res, next);
});

//404
app.use(function(req, res, next) {
    res.status(404).send('404')
})

//500
app.use(function(req, res, next) {
    res.status(500).send('500')
})

app.listen(app.get('port'), function() {
    console.log('http://localhost:' + app.get('port'))
})