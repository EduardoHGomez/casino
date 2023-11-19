const mongoose = require('../../routes/mongoose');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


let expectedSchema = mongoose.Schema({
    name: String,
    age: Number,
    balance: Number,
    email: String,
    password: String
});


let User = mongoose.model('users',expectedSchema);

module.exports = User;