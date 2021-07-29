const router = require('express').Router()
const HomeController = require('../controllers/home-controller')

router.get('/',HomeController.homePage)

module.exports = router;