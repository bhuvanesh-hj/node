const express = require("express");

const router = express.Router();

const controller = require("../controllers/success");

router.post("/success", controller.successPage);

module.exports = router;
