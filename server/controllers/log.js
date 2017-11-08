var common = require('../lib/common')

class Log {
    fetch(req, res, next) {
        var logM = common.helper.modelLoader('crm_error');
        logM.find(req.query.filter)
            .sort(req.query.sort || {})
            .skip((req.query.pagination.current - 1) * req.query.pagination.pageSize)
            .limit(parseInt(req.query.pagination.pageSize))
            .exec(function(err, result) {
                if(err) return res.status(500).send("log fetch failed");
                return res.status(200).send(result)
            })
    }

    count(req, res, next) {
        var logM = common.helper.modelLoader('crm_error');
        logM.count(req.query.filters)
            .exec(function(err, result) {
                if(err) return res.status(500).send("log count failed");
                return res.status(200).send({total: result})
            })
    }
}

module.exports = Log