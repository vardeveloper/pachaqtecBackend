const productModel = require("../models/productModel");

const getItemById = async (req, res) => {
    try {
        const _id = req.params.id;
        const data = await productModel.findOneData(_id);
        if (data === null) {
            res.send({
                code: 200,
                status: false,
                message: "Producto no encontrado",
            })
            return
        }
        console.log("Producto encontrado", data);
        res.send(data);
    } catch (e) {
        console.log(e);
        res.send(e);
    }
}

const getItemByName = async (req, res) => {
    try {
        const q = req.params.q;
        const data = await productModel.find({name: new RegExp(q)});
        if (data === null) {
            res.send({
                code: 200,
                status: false,
                message: "Producto no encontrado",
            })
            return
        }
        console.log("Producto encontrado", data);
        res.send(data);
    } catch (e) {
        console.log(e);
        res.send(e);
    }
}

const getAllItems = async (req, res) => {
    try {
        const data = await productModel.findAllData();
        if (data.length === 0) {
            console.log("No hay data");
            res.send({
                code: 200,
                status: false,
                message: "No hay nada",
            });
            return;
        }
        console.log("Productos encontrados", data);
        res.send(data);
    } catch (e) {
        console.log(e);
        res.send(e);
    }
}

const createItem = async (req, res) => {
    try {
        const { body } = req;
        const data = await productModel.create(body)
        console.log("Producto creado", data);
        res.send({
            code: 200,
            status: true,
            message: "Producto creado exitosamente",
            data: data
        })
    } catch (e) {
        console.log(e);
        res.send(e);
    }
}

const updateItem = async (req, res) => {
    try {
        const _id = req.params.id;
        const { body } = req;
        const data = await productModel.findOneAndUpdate({_id}, body);
        if (data === null) {
            res.send({
                code: 200,
                status: false,
                message: "Producto no encontrado",
            })
            return
        }
        console.log("Producto actualizado", data);
        res.send({
            code: 200,
            status: true,
            message: "Producto actualizado",
            data: data
        })
    } catch (e) {
        console.log(e);
        res.send(e);
    }
}

const deleteItem = async (req, res) => {
    try {
        const _id = req.params.id;
        const data = await productModel.deleteOne({_id});
        if (data.deletedCount === 0) {
            res.send({
                code: 200,
                status: false,
                message: "Producto no encontrado",
            })
            return
        }
        console.log("Producto eliminado", data);
        res.send({
            code: 200,
            status: true,
            message: "Producto Eliminado",
            data: data
        })
    } catch (e) {
        console.log(e);
        res.send(e);
    }
}

module.exports = {
    getItemById,
    getItemByName,
    getAllItems,
    createItem,
    updateItem,
    deleteItem,
}