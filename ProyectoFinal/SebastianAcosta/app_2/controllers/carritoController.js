const express = require("express");
const session = require("express-session");
const app = express();

var options = {
    //store: new FileStore({path: "./sessions"}),
    secret: "secret",
    resave: false,
    saveUninitialized: true,
    name: 'my.connect.sid'
}

app.use(session(options));

const Carrito = require('../models/carritoModel.js');
const productController = require("../controllers/productController");

const encontrarCarrito = async (req, res) => {
    try {
        const data = await Carrito.find({username: new RegExp(req.session.username)});
        console.log(data[0].productos);
        res.send(data);
        return data[0];
    } catch (e) {
        console.log(e);
        res.send(e);
    }
}

const agregarProducto = async (req, res) => {
    try {
        var carritoCompleto = await Carrito.find({username: new RegExp(req.session.username)});
        const carritoOld = carritoCompleto[0].productos;

        const _id = req.params.id;
        const data = await productController.encontrarById(_id);

        carritoOld.push(data);
        carritoCompleto[0].productos = carritoOld;

        const carritoNew = await Carrito.findOneAndUpdate({username: new RegExp(req.session.username)}, carritoCompleto[0]);
        if (carritoNew === null) {
            res.send({
                code: 200,
                status: false,
                message: "Carrito no encontrado",
            })
            return
        }
        console.log("Carrito actualizado", carritoNew);
        res.send({
            code: 200,
            status: true,
            message: "Carrito actualizado"
        })
    } catch (e) {
        console.log(e);
        res.send(e);
    }
}


const eliminarProducto = async (req, res) => {
    try {
        var carritoCompleto = await Carrito.find({username: new RegExp(req.session.username)});
        const carritoOld = carritoCompleto[0].productos;

        const _id = req.params.id;

        const index = carritoOld.findIndex(el => el._id === _id);
        carritoOld.splice(index, 1);
        carritoCompleto[0].productos = carritoOld;

        const carritoNew = await Carrito.findOneAndUpdate({username: new RegExp(req.session.username)}, carritoCompleto[0]);
        if (carritoNew === null) {
            res.send({
                code: 200,
                status: false,
                message: "Carrito no encontrado",
            })
            return
        }
        console.log("Producto eliminado", carritoNew);
        res.send({
            code: 200,
            status: true,
            message: "Producto eliminado"
        })
    } catch (e) {
        console.log(e);
        res.send(e);
    }
}

const crearCarrito = async (req, res) => {
    try {
        const { body } = req;
        const data = await Carrito.create(body);
        res.send(data);
        return data;
    } catch (e) {
        console.log(e);
        res.send(e);
    }
}

const eliminarCarrito = async (req, res) => {
    try {
        const _id = req.params.id;
        await Carrito.findByIdAndDelete(_id);
        res.send('Carrito deleted');
    } catch (e) {
        console.log(e);
        res.send(e);
    }
}

module.exports = {
    agregarProducto,
    encontrarCarrito,
    crearCarrito,
    eliminarProducto,
    eliminarCarrito,
}