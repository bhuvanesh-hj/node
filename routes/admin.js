const express = require("express");
// const path = require('path');

// const routeDir = require('../utils/path');

const addProductController = require('../controllers/admin')

const routes = express.Router();

routes.get("/add-product", addProductController.getAddProduct);

routes.post("/add-product", addProductController.postAddProduct);

module.exports = routes;
