const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const dirListController = require('../controller/dirlist.js');

const router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));  

router.post('/dir', dirListController.getInputPath);
router.get('/api', dirListController.getDir);

module.exports = router;


