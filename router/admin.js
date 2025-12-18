const express = require("express");
const router = express.Router();


router.get("/hello", (res,req) => {
    res.status(200).json("Hey Slipbit");
})

module.exports = router;