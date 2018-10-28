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
router.post('/restaurants', controller.create());

//PUT
router.put('/restaurants', controller.update());

// DELETE
router.delete('/restaurants', controller.delete());

module.exports = router;