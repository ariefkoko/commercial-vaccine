const router = require('express').Router()
const UserController = require('../controllers/user-controller')

router.get('/',UserController.registerPage)
router.post('/',UserController.register)

module.exports = router;