const express = require('express');
const router = express.Router();
const knex = require('../knex.js');
const controller = require('./api.controller.js');

// router.get('/', sendFile("html"))
//GET
// Show all categories
router.get('/categories', controller.read('categories'));
// Show all areas
router.get('/areas', controller.read('areas'));
// Show all restaurants
router.get('/restaurants', controller.read('restaurants'))
// Get restaurant by name
// DONE
// Get restaurant information (address, url, budget);
//POST
// Post new restaurant
//PUT
// Update restaurant information
// DELETE
//Delete restaurant
module.exports = router;

// Get category and area by id and name
//DONE