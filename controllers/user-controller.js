// const {hasPassword} = require('../helper/bcryptpass')
const {City,User,Vaccine,VaccineCity} = require('../models/index')
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
            password : req.body.password,
            CityId : req.body.cityId

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
        let dataCity = null
        City.findAll()
            .then(data => {
                dataCity = data
                return Vaccine.findAll()
            })
            .then(dataVaccine => {
                res.render('adminPage.ejs',{dataCity,dataVaccine})
            })    
            .catch(err => {
                res.send(err)
            })
    }

    static addVaccine(req,res) {
        const newData = {
            vaccine_name : req.body.vaccine_name,
            country_manufacture : req.body.country_manufacture,
            efficacy : req.body.effication,
            base_material : req.body.base_material,
            price : req.body.price,
            description : req.body.description,
            image : req.body.image        }

        Vaccine.create(newData)
        .then(_ => {
            res.redirect('/user/admin')
        })
        .catch(err => {
            console.log(err)
            res.send(err)
        })
    }

    static addVaccineToCity(req,res) {
        const newData = {
            CityId : req.body.CityId,
            VaccineId : req.body.VaccineId
        }
        VaccineCity.create(newData)
            .then(_ => {
                res.redirect('/user/admin')
            })
            .catch(err => {
                res.send(err)
            })
    }

    static delete(req,res) {
        Vaccine.destroy({
            where : {
                id : req.params.id
            }
        })

        .then(_ => {
            res.redirect('/user/admin')
        })
        .catch(err => {
            res.send(err)
        })
    }

    static editForm(req,res) {
        Vaccine.findByPk(req.params.id)
        .then(data => {
            res.render('formEdit.ejs',{data})
        })
        .catch(err => {
            res.send(err)
        })
    }

    static edit(req,res) {
        const newData = {
            vaccine_name : req.body.vaccine_name,
            country_manufacture : req.body.country_manufacture,
            efficacy : req.body.effication,
            base_material : req.body.base_material,
            price : req.body.price      
        }
        Vaccine.update(newData,{
            where : {
                id : req.params.id
            }
        })
        .then(_ => {
            res.redirect('/user/admin')
        })
        .catch(err => {
            res.send(err)
        })
    }

    static customerPage(req, res) {
        res.send('hallso')
    }
}

module.exports = UserController;