const router = require('express').Router()
const UserController = require('../controllers/user-controller')

router.get('/',UserController.registerPage)
router.post('/',UserController.register)
router.get('/login',UserController.loginPage)
router.post('/login',UserController.login)
router.post('/city/admin/add',UserController.addCity)

module.exports = router;