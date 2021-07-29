const {Vaccine} = require('../models/index')

class HomeController {
    static homePage(req,res){
        Vaccine
        .findAll()
            .then(data => {
                console.log(data)
                res.render('homePage.ejs',{data})
            })
            .catch(err => {
                res.send(err)
            })
    }   
}

module.exports = HomeController;