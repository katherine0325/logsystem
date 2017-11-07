/**
 * 功能描述：删除log库['crm_error', 'crm_warn', 'crm_info', 'mso_error', 'mso_warn', 'crm_info']表中所有一个月前的日志
 */

var common = require('../lib/common')
var co = require('co')
var moment = require('moment')

co(function*() {
    var connectionNames = ['crm_error', 'crm_warn', 'crm_info', 'mso_error', 'mso_warn', 'crm_info'];

    for(let i=0; i<connectionNames.length; i++) {
        var logM = common.helper.modelLoader(connectionNames[i]);
        yield logM.remove({sCreateTime: {$lt: moment().subtract(30, "days").format("YYYY-MM-DD")}})
    }

    return;

}).catch(e => {
    var systemlogM = common.helper.modelLoader('system_log');
    systemlogM.create({
        msg: "/server/task/deletelogs.js failed",
        err: e,
        sCreateTime: moment().format('YYYY-MM-DD HH:mm:ss')
    })
})
