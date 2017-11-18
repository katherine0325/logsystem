var common = require('../lib/common')
var config = require('../../config')
var co = require('co')
var _ = require('lodash')

class Controller {
    fetchMenu(req, res, next) {
        var _this = this,
            subMenus = [],
            menuItem = config.log_connections,
            result = []

        menuItem.forEach(i => {
            subMenus.push(i.split('_')[0])
        })

        subMenus = _.uniq(subMenus)

        result = subMenus.map(i => {
            let regi = new RegExp(i);
            let menus = [];
            menuItem.forEach(j => {
                if(regi.test(j)) {
                    menus.push(j.replace(`${i}_`, '').toUpperCase())
                }
            })

            return {key: i.toUpperCase(), menus: menus}
        })

        return res.status(200).send(result);
    }
}

module.exports = Controller