const router = require('express').Router()
const isLogin = require('../middleware/isLogin')
const UserController = require('../controllers/user-controller')

router.get('/register',UserController.registerPage)
router.post('/register',UserController.register)
router.get('/login',UserController.loginPage)
router.post('/login',UserController.login)
router.post('/admin/add',UserController.addCity)
router.get('/admin',isLogin,UserController.adminPage)
router.post('/vaccine/admin/add',UserController.addVaccine)
router.post('/vaccinetocity/admin/add',UserController.addVaccineToCity)
router.get('/delete/:id', UserController.delete)
router.get('/edit/:id', UserController.editForm)
router.post('/edit/:id', UserController.edit)
router.get('/customer/:id',UserController.customerPage)
router.get('/customer/:id/pickVaccine/:VaccineId', UserController.pickVaccine)

module.exports = router;