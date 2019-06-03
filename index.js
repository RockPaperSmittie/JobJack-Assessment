const express = require('express');
const fs = require('fs');
const path = require('path');
const http = require('http');

const app = express();

const server = http.createServer(app);

server.listen(2200);

