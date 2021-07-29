class UserController {
    static registerPage(req,res) {
        res.render('loginPage.ejs')
    }

    static register(req,res){
        const newData = {
            name : req.body.name,
            role : req.body.role,
            email : req.body.email,
            password : req.body.name,
        }
        res.send(newData)
    }
}

module.exports = UserController;