const orderModel = require("../models/orderModel");

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

module.exports = {
    getOrderById,
    getAllOrders,
    createOrder,
    updateOrder
}