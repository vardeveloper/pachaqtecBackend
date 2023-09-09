require("dotenv").config()
const express = require("express");
const jwt = require("jsonwebtoken");
const { compare } = require("bcryptjs");

const app = express();

app.use(express.urlencoded({ extended: true }));

const secretKey = process.env.JWT_SECRET;

const users = [
    {
        _id: '64cb18741b04dbc8d946c311',
        username: 'usuario1',
        password: '$2a$10$tFcYsp4SHeeiSdloNXpXReg7ExptGUQ1hczYJFv/X1VBYYImAW7KO' // pass2
    },
    {
        _id: '64cb18741b04dbc8d946c516',
        username: 'devar',
        password: '$2a$10$tFcYsp4SHeeiSdloNXpXReg7ExptGUQ1hczYJFv/X1VBYYImAW7KO' // pass2
    },
];

const authenticateToken = (req, res, next) => {
    const token = req.header('x-auth-token')
    if (!token) {
        return res.status(401).json({ message: "Token no proporcionado. Acceso denegado." });
    }
    try {
        const user = jwt.verify(token, secretKey);
        req.user = user;
        next();
    } catch (e) {
        res.status(400).json({ message: 'Acceso denegado, token expirado o incorrecto' })
    }
}

app.get("/", (req, res) => {
    res.send("¡Bienvenido a la aplicación JWT!");
})

app.post("/login", async (req, res) => {
    const { username, password } = req.body;

    const user = users.find(user => user.username === username);
    const check = await compare(password, user.password)

    if (user && check) {
        const data = {
            _id: user._id,
            username: username,
        }
        const token = jwt.sign(data, secretKey, { expiresIn: "2h" });
        res.json({ token, data });
    } else {
        res.json({ message: "Credencial inválida" });
    }
})

app.get('/protected', authenticateToken, (req, res) => {
    res.json(req.user);
})

app.listen(3000, () => {
    console.log("Servidor escchando en http://localhost:3000");
})