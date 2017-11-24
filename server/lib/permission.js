var common = require('../lib/common')
var _systems = common.config.system;

class Permission {
    checkAPIPermission(req, res, next, callback) {
        var system = req.body? req.body.sSystem: (req.query? req.query.sSystem: '');

        if(system && _systems.indexOf(system) !== -1) {
            return callback(null, 1)
        } else {
            return callback(2)
        }
    }
}

module.exports = Permission