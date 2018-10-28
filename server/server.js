const express = require('express');
const knex = require('../knex.js');
// const bodyParser = require('body-parser');

const app = express();

const apiRouter = require("./api.router.js");
app.use(
    "/", // add additional middleware to the server, mounted on the /api/ path
    express.json(), // enables parsing of application/json request bodies
    express.urlencoded({ extended: true }), // enables parsing of application/x-www-form-urlencoded data
    apiRouter
);

let port = 4000;
app.listen(port, () => {
    console.log('Server listening on port: ' + port);
});