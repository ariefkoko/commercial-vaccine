const {Vaccine} = require('../models')
const { convertEfficacy, convertPrice } = require('../helper/convert')

class VaccineController {
    static detail(req, res) {
        const id = req.params.id;
        Vaccine.findByPk(id)
            .then(data => res.render('vaccine-detail', { data, convertEfficacy, convertPrice }))
            .catch(err => res.send(err))
    }
}

module.exports = VaccineController;