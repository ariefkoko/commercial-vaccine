// const {hasPassword} = require('../helper/bcryptpass')
const {City,User} = require('../models/index')
const { correctPassword } = require('../helper/bcryptpass')

class UserController {
    static registerPage(req,res) {
        City.findAll()
            .then(data => {
                res.render('registerPage.ejs',{data})
            })
            .catch(err => {
                res.send(err)
            })
    }

    static register(req,res){
        const newData = {
            name : req.body.name,
            role : req.body.role,
            email : req.body.email,
            password : req.body.name,
            cityId : req.body.cityId
        }
        User.create(newData)
            .then(data => {
                const id = data.id;
                res.redirect(`/user/customer/${id}`)
            })
            .catch(err => {
                res.send(err)
            })
    }

    static loginPage(req,res) {
        res.render('loginPage')
    }
    
    static login(req,res) {
        const { email, password } = req.body;
        User.findOne({
            where : { email }
        })
            .then(data => {
                if(data.role === 'admin' && password === data.password) res.redirect('/user/admin');
                else if (correctPassword(password, data.password)) res.send('haaaai')
                else res.send('email/password salah')
            })
            .catch(err => {
                res.send("register terlebih dahulu")
            })
    }

    static addCity(req,res){
        let newData = {city_name : req.body.city_name }
        City.create(newData)
            .then(_ => {
                res.redirect('/user/admin')
            })
            .catch(err => {
                res.send(err)
            })
    }

    static adminPage(req,res) {    
        res.render('adminPage.ejs')
    }

    static customerPage(req, res) {
        res.send('hallso')
    }
}

module.exports = UserController;