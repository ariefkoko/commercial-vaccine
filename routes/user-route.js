const router = require('express').Router()
const UserController = require('../controllers/user-controller')

router.get('/register',UserController.registerPage)
router.post('/register',UserController.register)
router.get('/login',UserController.loginPage)
router.post('/login',UserController.login)
router.post('/admin/add',UserController.addCity)
router.get('/admin',UserController.adminPage)
router.get('/customer/:id',UserController.customerPage)

module.exports = router;