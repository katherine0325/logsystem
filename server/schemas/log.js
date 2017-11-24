var mongoose = require('mongoose')

var LogSchema = new mongoose.Schema({
    sUserName : String,
    sMethod : String,
    sIp : String,
    sUrl : String,
    sSystem: String,
    sLevel: String,
    sMark: String,
    sCreateTime : String,
    oOption : Object
})

module.exports = LogSchema
