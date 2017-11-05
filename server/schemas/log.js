var mongoose = require('mongoose')

var Crm_errorSchema = new mongoose.Schema({
    sUserName : String,
    sMethod : String,
    sIp : String,
    sUrl : String,
    sCreateTime : String,
    oOption : Object
})

module.exports = Crm_errorSchema
