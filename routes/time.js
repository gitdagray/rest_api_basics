const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
    req.time = new Date().toString();
    next();
}, (req, res) => {
    res.json({ "time": req.time });
});

module.exports = router;