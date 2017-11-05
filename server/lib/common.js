var path = require('path');

var helper = function() {
    this.modelLoader = function(modelName) {
        var model = require(`../models/${modelName}.js`);

        return model;
    }
}

exports.helper = new helper();

