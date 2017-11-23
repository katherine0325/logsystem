const path = require('path');
const mongoose = require('mongoose');
const config = require('../../config')


var helper = function() {
    // 连接数据库和表
    this.modelLoader = function(connectionName, dbName) {
        if(!connectionName || connectionName == '') {
            return
        }

        let db = 'log'
        if(dbName) {
            db = dbName;
        }
        mongoose.connect(`mongodb://localhost/${db}`);

        var schema = require(`../schemas/${connectionName}.js`);
        var model = mongoose.model(connectionName, schema);

        return model;
    }

    /* 重组参数使其适合mongoose搜索
    {
        filters: {
            sCreateTime: {
                logic: 'range',
                value: ['2017-11-06', '2017-11-08']
            },
            sUserName: {
                logic: 'include',
                value: 'ju'
            },
            sMethod: {
                logic: '=',
                value: 'POST'
            }
        }
    }
    */
    this.recomposeQuery = function(query) {
        var newQuery = {
            filters: {}
        };

        if(query) {

            if(typeof query === 'string') {
                query = JSON.parse(query)
            }

            if(query.filters) {
                for(let key in query.filters) {
                    if(query.filters[key].value && query.filters[key].logic === '=') {
                        newQuery.filters[key] = query.filters[key].value
                    } else if(query.filters[key].value && query.filters[key].value.length > 0 && query.filters[key].logic === 'range') {
                        newQuery.filters[key] = {$gte: query.filters[key].value[0], $lte: query.filters[key].value[1]}
                    } else if(query.filters[key].value && query.filters[key].logic === 'include') {
                        newQuery.filters[key] = new RegExp(query.filters[key].value)
                    }
                }
            } else {
                newQuery.filters = {}
            }

            if(query.sorter) {
                newQuery.sorter = query.sorter;
            }

            try {
                newQuery.skip = (req.query.pagination.current - 1) * req.query.pagination.pageSize
            } catch(e) {}

            try {
                newQuery.limit = parseInt(req.query.pagination.pageSize)
            } catch(e) {}

            return newQuery;
        } else {
            return {}
        }
    }
}

exports.helper = new helper();

