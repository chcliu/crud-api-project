const { Restaurant } = require('../model/Restaurant.js');

module.exports = {

    create(req, res) {

        res.status(200).json(req.body);
    }
}