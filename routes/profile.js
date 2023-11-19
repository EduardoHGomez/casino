const express = require('express');
const path = require('path');
const router = express.Router();
const User = require("../src/controllers/login_connect");
// const User = require('../routes/user_schema.js');


// ----------------- PROFILE ---------

// /profile/ => load HTML
router.get("/details/:id", (req, res) => {

    res.sendFile(path.resolve(__dirname + "/../src/views/profile.html"));
});

// /profile/user => load current user's info


// ------------------ BALANCE (/profile/balance) --------------------------

router.get("/balance", (req, res) => {
    


    res.sendFile(path.resolve(__dirname + "/../src/views/balance.html"));
});

// Update balance (add or withdraw)
router.put("/balance", (req, res) => {

    // Find Id from User
    // Hasta ahora está solo para Paco

    let update = {
        balance: 1500
    };

    User.findOneAndUpdate({_id: '65590fdd2fc8bec8d11c3829'}, update, {new: true}).then((doc) => {
        console.log(doc);
        res.send(doc);
    }).catch((err) => console.log(err));

});

// ----------------- ACTIVITY -------------------
// /profile/activity
router.get("/activity", (req, res) => {
    res.sendFile(path.resolve(__dirname + "/../src/views/activity.html"));
});

module.exports = router;