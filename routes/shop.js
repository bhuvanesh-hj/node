const express = require('express');
const path = require('path');

const routeDir = require('../utils/path');

const routes = express.Router();


routes.get('/',(req, res)=>{
    res.sendFile(path.join(routeDir,'views','shop.html'))
})

module.exports = routes;