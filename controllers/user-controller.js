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
                    res.render('adminPage.ejs')
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
        res.send(req.body)
    }
}

module.exports = UserController;