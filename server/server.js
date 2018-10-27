const express = require('express');
const bodyParser = require('body-parser');

const app = express();

let port = 4000;
app.listen(port, () => {
    console.log('Server listening on port: ' + port);
});