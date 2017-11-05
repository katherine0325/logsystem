var mongoose = require('mongoose')
var Crm_errorSchema = require('../schemas/log.js')
var Crm_error = mongoose.model('Crm_error',Crm_errorSchema)

module.exports = Crm_error