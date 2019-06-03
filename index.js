const express = require('express');

const dirRoutes = require('./routes/dir.js');

const app = express();

app.use(dirRoutes);

app.listen(2200);

