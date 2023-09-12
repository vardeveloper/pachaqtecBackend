const PORT = process.env.PORT || 8000;
const express = require("express");
const nodemon = require("nodemon");
const jwt = require("jsonwebtoken");
const {compare} = require("bcryptjs");
const mongoose = require("mongoose");
const app = express();
const axios = require("axios");
const http = require("http");
const { Server: SocketServer } = require("socket.io")
const {prendasInfo} = require("../data/prendas");
const polos = prendasInfo.polos;

app.use(express.urlencoded({ extended: true }));

const secretKey = process.env.JWT_SECRET;

app.use(express.json());

app.listen(PORT, ()=> console.log(`Server running on PORT ${PORT}`));

app.get("/", (req, res) => {
    res.send("Welcome to my home");
});

app.get("/api/prendas", (req, res) => {
    res.json(prendasInfo);
});

app.get("/api/prendas/polos", (req, res) => {
    res.json(polos);
});

app.get("/api/prendas/polos/:nombre", (req, res) => {
    let nombre = req.params.nombre;
    const resultados = polos.filter(prenda => prenda.nombre === nombre);

    if(resultados.length === 0) {
        return res.send('No hay polos');
    }

    res.status(201).json(resultados);
});

app.get("/api/prendas/polos/:nombre/:precio", (req, res) => {
    let nombre = req.params.nombre;
    let precio = req.params.precio;
    const resultados = polos.filter(prenda => prenda.nombre === nombre && prenda.precio === precio);

    if(resultados.length === 0) {
        return res.send('No hay polos');
    }

    res.status(201).json(resultados);
});

// Hice la peticiones POST, PUT, PATCH y DELETE
// con Postman y funcionaron

app.post("/api/prendas/polos", (req, res) => {
    let prendanueva = req.body;
    polos.push(prendanueva);
    res.send(polos);
})

app.put("/api/prendas/polos/:id", (req, res) => {
    let updated_polo = req.body;
    const id = parseInt(req.params.id);
    const indice = polos.findIndex(polo => polo.id === id);

    if (indice == -1) {
        return res.send("No polo found");
    }

    polos[indice] = updated_polo;
    res.send(polos);
})

app.patch("/api/prendas/polos/:id", (req, res) => {
    let updated_polo = req.body;
    const id = parseInt(req.params.id);
    const indice = polos.findIndex(polo => polo.id === id);

    if (indice == -1) {
        return res.send("No polo found");
    }

    let polo = polos[indice];
    Object.assign(polo, updated_polo)
    res.send(polos);
})

app.delete("/api/prendas/polos/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const indice = polos.findIndex(polo => polo.id === id);

    if (indice == -1) {
        return res.send("No polo found");
    }
    polos.splice(indice,1);
    res.send(polos);
})

const users = [
    {
        _id: '64cb18741b04dbc8d946c311',
        username: 'usuariol',
        password: '$2a$10$t Fv/XIVBW1mAW7KO' // pess2
    },
    {
        id: '64cb18741b04dbc8d946c516',
        username: 'yjas',
        password: '$2a$10$tFcYsp4SHeeiSdonNXpXReg7ExptGUQ1hczYJFv/X1VBYYImAW7KO' // pess2
    }
];

const authenticateToken = (req, res, next) => {
    const token = req.header('x-auth-token')
    if(!token){
        return res.status(401).json({message: "No Token Provided. Access DENIED."});
    }
    try{
        const user = jwt.verify(token, secretKey);
        req.user = user;
        next();
    } catch (e) {
        res.status(400).json({message: 'Token expired or invalid. Access DENIED'});
    };
};

app.get("/", (req,res) => {
    res.send("¡Welcome to JWT App");
});

app.post("/login", async (rep,res) => {
    const { username, password } = req.body;

    const user = users.find(user => user.username === username);
    const check = await compare(password, user. password);

    if (user && check) {
        const data = {
            _id: user._id,
            username: username,
        };
        const token = jwt.sign(data, secretKey, { expiresIn: "2h"});
        res.json ({ token, data });
    } else {
        res.json({ message: "Invalid log" });
    };
});

app.get('/protected', authenticateToken, (req, res) => {
    res.json(req.user);
})

app.listen(3000, () => {
    console.log("Server running on port 3000");
});

