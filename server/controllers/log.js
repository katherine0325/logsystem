var common = require('../lib/common')
var request = require('request')

class Log {
    fetch(req, res, next) {
        var logM = common.helper.modelLoader('crm_error');
        logM.find({}, function(err, result) {
            if(err) return res.status(500).send("log fetch failed");
            return res.status(200).send(result)
        })
    }

    create(req, res, next) {
        if(!req.body || !req.body.system || !req.body.type) return;

        // mongo存一份
        var logM = common.helper.modelLoader(`${req.body.system}_${req.body.type}`);
        logM.create(req.body);

        // 发送给大数据一份
        request.post('http://xxx', req.body);
        
        return;
    }
}

module.exports = Log