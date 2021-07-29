// const {hasPassword} = require('../helper/bcryptpass')
const {City,User} = require('../models/index')

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
            cityId : req.body.cityId,
            createdAt : new Date(),
            updatedAt : new Date()
        }
        User.create(newData)
            .then(_ => {
                res.send('Anda terdaftar')
            })
            .catch(err => {
                res.send(err)
            })
    }

    static loginPage(req,res) {
        res.render('loginPage')
    }
    
    static login(req,res) {
        // res.send(dataLogin)
        User.findOne({
            where : {
                email : req.body.email,
                password : req.body.password
            }
        })
            .then(data => {
                if(data.role === 'admin'){
                    res.redirect('/user/admin')
                }else{
                    res.send('haaaa')
                }
                // console.log(data)
                // res.send(data)
                // kalau ketemu redirect ke path sesuai dengan role
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
}

module.exports = UserController;