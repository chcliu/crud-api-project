const express = require('express');
const router = express.Router();
const knex = require('../knex.js');
const controller = require('./api.controller.js');


router.get('/', (req, res) => {
    res.status(200).json(knex('areas')
        .select())
});
module.exports = router;