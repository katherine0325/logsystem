const path = require('path');
const mongoose = require('mongoose');


var helper = function() {
    this.modelLoader = function(connectionName, dbName) {
        if(!connectionName || connectionName == '') {
            return
        }

        let db = 'log'
        if(dbName) {
            db = dbName;
        }
        mongoose.connect(`mongodb://localhost/${db}`);

        let schemaFeild = connectionName;
        if(connectionName === 'crm_error' || 
            connectionName === 'crm_errors' ||
            connectionName === 'crm_warn' ||
            connectionName === 'crm_warns' ||
            connectionName === 'crm_info' ||
            connectionName === 'crm_infos' ||
            connectionName === 'mso_error' ||
            connectionName === 'mso_errors' ||
            connectionName === 'mso_warn' ||
            connectionName === 'mso_warns' ||
            connectionName === 'mso_info' ||
            connectionName === 'mso_infos'
        ) {
            schemaFeild = 'log'
        }

        var schema = require(`../schemas/${schemaFeild}.js`);
        var model = mongoose.model(connectionName, schema);

        return model;
    }
}

exports.helper = new helper();

