// --------------- DEFINICIONES ----------------------
const express = require('express');
const path = require('path');

const router = express.Router();
const profileRouter = require(path.resolve(__dirname + "/profile.js"));

// --------------- RUTAS -------------------------
// Root /
// Envía a la página de juegos
router.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname + "/../src/views/index_logIn.html"));
});

// Info
router.get("/information", (req, res) => {
    res.sendFile(path.resolve(__dirname + "/../src/views/info.html"));
});

// Rules
router.get("/rules", (req, res) => {
    res.sendFile(path.resolve(__dirname + "/../src/views/rules.html"));
});

// Index
router.get("/index", (req, res) => {
    res.sendFile(path.resolve(__dirname + "/../src/views/index_logIn.html"));
});

// Profile
router.use("/profile", profileRouter);

module.exports = router;