var fs = require('fs');
var path = require('path');

var conffile = path.join(__dirname, 'config.json');
var confjson = JSON.parse(fs.readFileSync(conffile, 'utf8'));
var config = confjson;

var ENV = process.env.NODE_ENV;
if (!ENV){
    ENV = 'development';
}

if (!config[ENV]){
    throw 'invalid environment variable';
}
module.exports = config[ENV];