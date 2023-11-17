const express = require('express');
const path = require('path');
const router = express.Router();

// /profile/
router.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname + "/../src/views/profile.html"));
});

// /profile/activity
router.get("/activity", (req, res) => {
    res.sendFile(path.resolve(__dirname + "/../src/views/activity.html"));
});

// /profile/balance
router.get("/balance", (req, res) => {
    res.sendFile(path.resolve(__dirname + "/../src/views/balance.html"));
});


module.exports = router;