const express = require('express');
const router = express.Router();
const knex = require('../knex.js');
const controller = require('./api.controller.js');

// router.get('/', sendFile("html"))
//GET
router.get('/categories', controller.read('categories'));
router.get('/areas', controller.read('areas'));
router.get('/restaurants', controller.read('restaurants'))

//POST
// Post new restaurant
router.post('/restaurants', controller.create());
//PUT
// Update restaurant information
// DELETE
//Delete restaurant
module.exports = router;