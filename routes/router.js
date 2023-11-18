// --------------- DEFINICIONES ----------------------
const express = require('express');
const path = require('path');
const jwt = require('jsonwebtoken');

const mongoose = require('./mongoose.js'); 

const router = express.Router();
const profileRouter = require(path.resolve(__dirname + "/profile.js"));
const gamesRouter = require(path.resolve(__dirname + "/games.js"));
const User = require("../src/controllers/login_connect");
const bcrypt = require("bcrypt");


// --------------- TOKEN -------------------------

/*
const verifyToken = (req, res, next) => {
    const token = req.header('Authorization');

    if (!token)
    {
        return res.status(401).json({ message: 'Acceso no autorizado. Token no proporcionado.' });
    }
    try
    {
        const decoded = jwt.verify(token, 'clave_secreta');
        req.userId = decoded.userId;
        next();
    }
    catch (error)
    {
        goToInit()
        res.status(401).json({ message: 'Acceso no autorizado. Token inválido.' });
    }
};
 */

/*
const verifyToken = (req, res, next) => {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({ message: 'Acceso no autorizado. Token no proporcionado.' });
    }

    try
    {
        const decoded = jwt.verify(token, 'clave_secreta');
        req.userId = decoded.userId;
        next();
    }
    catch (error)
    {
        res.status(401).json({ message: 'Acceso no autorizado. Token inválido.' });
    }
};

 */




router.post('/login', async (req,res) =>{
    try
    {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if(!user)
        {
            return res.status(401).json('Error invalido 1');
        }
        // teoricamente deberia ser con el compare pero no esta funcionando
        //const passwordCredit = await bcrypt.compare(password,user.password);

        const passwordCredit = password === user.password;

        if(!passwordCredit)
        {
            return res.status(401).json('Error invalido 2');
        }

        const token = jwt.sign({ userId: user._id }, 'clave_secreta', { expiresIn: '2h' });
        res.status(200).json({ token });
    }
    catch (ex)
    {
        res.status(500).json({ error: ex.message });
    }
})

/*
router.use('/information', verifyToken);
router.use('/rules', verifyToken);
router.use('/index', verifyToken);
router.use('/profile', verifyToken);
router.use('/games', verifyToken);
router.use('/add', verifyToken);
 */


// --------------- RUTAS -------------------------
// Root /
// Envía a la página de juegos
router.get("/", (req, res) => {
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

router.get("/register", (req, res) => {
    res.sendFile(path.resolve(__dirname + "/../src/views/register.html"));
});

// Profile
router.use("/profile", profileRouter);

// Games
router.use("/games", gamesRouter);


// // ------------ Ruta de prueba para cargar usuario -------------
router.get("/add", (req, res) => {
    let userSchema = mongoose.Schema({
        name: String,
        edad: Number,
        balance: Number
    });
    let User = mongoose.model('users', userSchema);
    let newUser = {name: "Taylor", age: 29, balance: 288.89};
    let user = User(newUser);


    user.save().then((doc) => {
        console.log("USUARIO CARGADO");
        res.send('Usuario Taylor cargado exitosamente');
    });
});

module.exports = router;