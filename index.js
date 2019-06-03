const express = require('express');

const dirListRoutes = require('./routes/dirlist.js');

const app = express();

app.use('/', dirListRoutes);

app.listen(2200);

