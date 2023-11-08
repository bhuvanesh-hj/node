const express = require("express");

const controller = require("../controllers/shop");

const routes = express.Router();

routes.get("/", controller.getProducts);

module.exports = routes;
