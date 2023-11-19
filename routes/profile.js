const express = require('express');
const path = require('path');
const router = express.Router();
const User = require("../src/controllers/login_connect");
// const User = require('../routes/user_schema.js');


// ----------------- PROFILE ---------


// /profile/ => load HTML
router.get("/", (req, res) => {

    res.sendFile(path.resolve(__dirname + "/../src/views/profile.html"));
});

// /profile/user => load current user's info


// ------------------ BALANCE (/profile/balance) --------------------------

router.get("/balance", (req, res) => {
    let id = req.query.id;

    // If if found in url, then send the user's data
    if (id) {
        User.find({
            _id: id
        }).then((docs) => {
            res.send(docs[0]);
        }).catch((err) => res.send("Error"));
    } else {
        // Send HTML File
        res.sendFile(path.resolve(__dirname + "/../src/views/balance.html"));
    }

});


// Update balance (add or withdraw)
router.put("/balance", (req, res) => {
    let data = req.body;
    let newAmount = data.amount;
    let id = data.id;

    // First get current value
    User.find({
        _id: id
    }).then((docs) => {

        // Update values old + new
        let oldAmount = docs[0].balance;
        newAmount = oldAmount + newAmount;

        let update = {
            balance: newAmount
        };

        User.findOneAndUpdate({_id: id}, update, {new: true}).then((doc) => {
            res.send(doc);
        }).catch((err) => console.log(err));

    }).catch((err) => res.send("Error"));

});

// ----------------- ACTIVITY -------------------
// /profile/activity
router.get("/activity", (req, res) => {
    res.sendFile(path.resolve(__dirname + "/../src/views/activity.html"));
});

module.exports = router;