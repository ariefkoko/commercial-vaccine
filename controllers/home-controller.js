const {Vaccine} = require('../models')
const { convertEfficacy } = require('../helper/convert')

class HomeController {
    static homePage(req,res){
        Vaccine.findAll()
            .then(data => res.render('homePage.ejs',{data, convertEfficacy}))
            .catch(err => res.send(err))
    }   
}

module.exports = HomeController;