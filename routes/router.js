// --------------- DEFINICIONES ----------------------
const express = require('express');
const path = require('path');

const router = express.Router();
const profileRouter = require(path.resolve(__dirname + "/profile.js"));
const gamesRouter = require(path.resolve(__dirname + "/games.js"));

// --------------- RUTAS -------------------------
// Root /
// Envía a la página de juegos
router.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname + "/../src/views/index_logIn.html"));
});

router.get("/login_pending", (req, res) => {
    res.sendFile(path.resolve(__dirname + "/../src/views/index_logInpending.html"));
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

// Login
router.get("/login", (req, res) => {
    res.sendFile(path.resolve(__dirname + "/../src/views/logIn.html"));
});

// Profile
router.use("/profile", profileRouter);

// Games
router.use("/games", gamesRouter);

module.exports = router;