const express = require('express');
const bodyParser = require('body-parser');

const dirListRoutes = require('./routes/dirlist.js');

const app = express();

app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Controll-Allow-Methods', 'GET', 'POST', 'OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});
app.use('/', dirListRoutes);

app.listen(2200);

