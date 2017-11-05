// var common = require('../lib/common')
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/log');

var logM = require('../models/log')

class Log {
    fetch(req, res, next) {
        logM.find({}, function(err, result) {
            console.log(result)
            return res.status(200).send(result)
        })
        // return res.status(500).send([
        //     {
        //         "_id" : "59fea0799224581b73223057",
        //         "key": "59fea0799224581b73223057",
        //         "sUserName" : "Joe",
        //         "sMethod" : "GET",
        //         "sIp" : "...127",
        //         "sUrl" : "/api/log/create1",
        //         "sCreateTime" : "2017-11-06",
        //         "oOption" : {
        //             "aaa" : "bbb","bbb" : "bbb",
        //             "ccc": "CCC"
        //         }
        //     },
        //     {
        //         "_id" : "59fea1ef5883c8ea65f9d7e4",
        //         "key": "59fea1ef5883c8ea65f9d7e4",
        //         "sUserName" : "Jim",
        //         "sMethod" : "GET",
        //         "sIp" : "...127",
        //         "sUrl" : "/api/log/create2",
        //         "sCreateTime" : "2017-11-06",
        //         "oOption" : {
        //             "aaa" : "bbb"
        //         }
        //     },
        //     {
        //         "_id" : "59fea1f35883c8ea65f9d7e5",
        //         "key": "59fea1f35883c8ea65f9d7e5",
        //         "sUserName" : "tech-katherine",
        //         "sMethod" : "GET",
        //         "sIp" : "...127",
        //         "sUrl" : "/api/log/create3",
        //         "sCreateTime" : "2017-11-06",
        //         "oOption" : {
        //             "aaa" : "bbb"
        //         }
        //     }
        // ]);

    //     const data = [];
    //     for (let i = 0; i < 100; i++) {
    //     data.push({
    //         key: i,
    //         sUserName: `Edward King ${i}`,
    //         sMethod: 'GET',
    //         sIp: '...127',
    //         sUrl: `London, Park Lane no. ${i}`,
    //         sCreateTime : `2017-11-${i>=9? (i + 1): '0' + (i + 1)}`,
    //         oOption: {"aaa": "bbb"}
    //     });
    // }
    
    // return res.status(200).send(data)

        // var logM = common.helper.modelLoader('log');
        // LogM.find({}, {})
        //     .sort({})
        //     .skip()
        //     .limit()
        //     .exce((err, result) => {
        //         if(err) return res.status(500).send({code: -1, msg: 'fetch logs error', res: req.query});
        //         return res.status(200).send(result);
        //     })
        // logM.find({}, function(err, result) {
        //     console.log(result)
        //     return res.status(200).send(result);
        // })

        // db.getCollection('crm_error').find({}).toArray(function(err, result) {
        //     console.log(result)

        //     result.forEach(i => {
        //         i.key = i._id
        //     })

        //     return res.status(200).send(result)
        // })

    }
}

module.exports = Log