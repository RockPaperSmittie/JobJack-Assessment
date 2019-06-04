const express = require('express');
const bodyParser = require('body-parser');

const dirListRoutes = require('./routes/dirlist.js');

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Controll-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})

app.use('/', dirListRoutes);

app.listen(2200);

