const express = require('express');
const path = require('path');
const router = express.Router();

// --------------- GET METHODS -----------------------

// ----- Profile ---------

// /profile/ => load HTML
router.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname + "/../src/views/profile.html"));
});

// /profile/user => load current user's info


// ----- Balance ---------

// /profile/balance
router.get("/balance", (req, res) => {
    res.sendFile(path.resolve(__dirname + "/../src/views/balance.html"));
});

// Update balance (add or withdraw)
router.put("/balance", (req, res) => {

    // Find Id from User

    res.send('Hola');

});

// ----- Activity ---------
// /profile/activity
router.get("/activity", (req, res) => {
    res.sendFile(path.resolve(__dirname + "/../src/views/activity.html"));
});

module.exports = router;