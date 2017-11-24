var express = require('express')
var app = express()
var path = require('path')
var fs = require('fs')
var mongoose = require('mongoose')
var bodyParser = require('body-parser')
var moment = require('moment')
var _ = require('lodash');
var permission = require('./server/lib/permission');

app.set('port', process.env.PORT || 3011);

app.use(express.static(path.join(__dirname, 'www')));
app.use(bodyParser.json({limit: '1mb'}));
app.use(bodyParser.urlencoded({extended: true}));

/**
 * 鉴权
 * 独立模块，将来要做成分离的用户权限系统时，可以随时剥离接入其他
 */
// app.use(function(req, res, next) {
// 	var urlType = req.path.split('/')[1];
// 	if(urlType === 'api') {
// 		var P;

// 		if(!P) {
// 			P = new permission();
// 		}

// 		P.checkAPIPermission(req, res, next, function(err, result) {
// 			if(err) return res.status(200).send("did not have the permission");
// 			next();
// 		});
// 	} else {
// 		next();
// 	}
// })

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, 'index.html'));
})

/**
 * 系统自有后端
 */
app.all('/sapi/:controller/:measure', function(req, res, next) {
	var file = require(`./server/controllers/${req.params.controller}`);
	file = new file();
	return file[req.params.measure](req, res, next);
});

/**
 * API接口
 */
app.post('/api/:filename/:measure', function(req, res, next) {
	if(fs.existsSync(`./server/API/${req.params.filename}.js`)) {
		var file = require(`./server/API/${req.params.filename}`);
		file = new file();
		return file['post' + _.capitalize(req.params.measure)](req, res, next);
	}

	return res.status(500).send('url is incorrect')
})


//404
app.use(function(req, res, next) {
    return res.status(404).send('404')
})

//500
app.use(function(req, res, next) {
    return res.status(500).send('500')
})

app.listen(app.get('port'), function() {
    console.log('http://localhost:' + app.get('port'))
})