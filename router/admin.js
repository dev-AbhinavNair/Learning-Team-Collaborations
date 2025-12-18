const express = require("express");
const router = express.Router();
const adminController = require("../controller/adminController");

router.get("/hello", adminController.getHello)

module.exports = router;