const orderModel = require("../models/orderModel");
const Carrito = require("../models/carritoModel.js");

const getOrderById = async (req, res) => {
    try {
        const _id = req.params.id;
        const data = await orderModel.findById({_id});
        if (data === null) {
            res.send({
                code: 200,
                status: false,
                message: "Pedido no encontrado",
            })
            return
        }
        console.log("Pedido encontrado", data);
        res.send(data);
    } catch (e) {
        console.log(e);
        res.send(e);
    }
}

const getAllOrders = async (req, res) => {
    try {
        const data = await orderModel.find();
        if (data.length === 0) {
            console.log("No hay data");
            res.send({
                code: 200,
                status: false,
                message: "No hay nada",
            });
            return;
        }
        console.log("Pedidos encontrados", data);
        res.send(data);
    } catch (e) {
        console.log(e);
        res.send(e);
    }
}

const createOrder = async (req, res) => {
    try {
        const { body } = req;
        const car = await Carrito.find({username: new RegExp(req.session.username)});
        body.products = car[0].productos;
        body.dateOrder = Date.now();
        let precios = car[0].productos.map(producto => producto.price);
        var suma = 0.0;
        for (let i = 0; i < precios.length; i++){
            suma += parseFloat(precios[i].toString());
        }
        console.log(suma);
        body.total = suma;
        const data = await orderModel.create(body)
        console.log("Pedido creado", data);
        res.send({
            code: 200,
            status: true,
            message: "Pedido creado exitosamente",
            data: data
        })
    } catch (e) {
        console.log(e);
        res.send(e);
    }
}

const updateOrder = async (req, res) => {
    try {
        const _id = req.params.id;
        const { body } = req;
        const data = await orderModel.findOneAndUpdate({_id}, body);
        if (data === null) {
            res.send({
                code: 200,
                status: false,
                message: "Pedido no encontrado",
            })
            return
        }
        console.log("Pedido actualizado", data);
        res.send({
            code: 200,
            status: true,
            message: "Pedido actualizado",
            data: data
        })
    } catch (e) {
        console.log(e);
        res.send(e);
    }
}

const deleteOrder = async (req, res) => {
    try {
        const _id = req.params.id;
        const data = await orderModel.findByIdAndRemove(_id);
        if (data === null) {
            res.send({
                code: 200,
                status: false,
                message: "Pedido no encontrado",
            })
            return
        }
        res.send({
            code: 200,
            status: true,
            message: "Pedido eliminado",
            data: data
        })
    } catch (e) {
        console.log(e);
        res.send(e);
    }
}

module.exports = {
    getOrderById,
    getAllOrders,
    createOrder,
    updateOrder,
    deleteOrder,
}