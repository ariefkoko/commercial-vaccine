const router = require('express').Router()
const home = require('./home-route')
const vaccine = require('./vaccine-route')
const city = require('./city-route')
const user = require('./user-route')

router.use('/', home)
router.use('/vaccine', vaccine)
router.use('/city', city)
router.use('/user', user)

module.exports = router;
