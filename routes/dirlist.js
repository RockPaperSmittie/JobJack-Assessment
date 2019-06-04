const express = require('express');

const dirListController = require('../controller/dirlist.js');

const router = express.Router();

router.get('/', dirListController.getDir);

module.exports = router;


