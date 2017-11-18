var common = require('../lib/common')
// var request = require('request')

class Nextsystem {
    create(req, res, next) {
        if(!req.body || !req.body.system || !req.body.type) return;

        // mongo存一份
        var logM = common.helper.modelLoader(`${req.body.system}_${req.body.type}`);
        logM.create(req.body);

        // 发送给大数据一份
        // request.post('http://xxx', req.body);
        
        return;
    }
}

module.exports = Nextsystem