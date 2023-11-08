const express = require("express");

const path = require("path");

const router = express.Router();

const controller = require("../controllers/contactus");

router.get("/contactus", controller.contactUsPage);

module.exports = router;
