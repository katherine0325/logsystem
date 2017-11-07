var mongoose = require('mongoose')

var SystemLogSchema = new mongoose.Schema({
    msg: String,
    err: String,
    sCreateTime: String
})

module.exports = SystemLogSchema
