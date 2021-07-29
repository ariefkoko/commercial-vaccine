const router = require('express').Router()
const VaccineController = require('../controllers/vaccine-controller')

router.get('/:id',VaccineController.detail)

module.exports = router;