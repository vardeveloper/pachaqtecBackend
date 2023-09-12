const categoryModel = require("../models/categoryModel");

const getCategoryById = async (req, res) => {
    try {
        const _id = req.params.id;
        const data = await categoryModel.findById({_id});
        if (data === null) {
            res.send({
                code: 200,
                status: false,
                message: "Categoria no encontrado",
            })
            return
        }
        console.log("Categoria encontrado", data);
        res.send(data);
    } catch (e) {
        console.log(e);
        res.send(e);
    }
}

const getAllCategories = async (req, res) => {
    try {
        const data = await categoryModel.find();
        if (data.length === 0) {
            console.log("No hay data");
            res.send({
                code: 200,
                status: false,
                message: "No hay nada",
            });
            return;
        }
        console.log("Categorias encontrados", data);
        res.send(data);
    } catch (e) {
        console.log(e);
        res.send(e);
    }
}

const createCategory = async (req, res) => {
    try {
        const { body } = req;
        const data = await categoryModel.create(body)
        console.log("Categoria creado", data);
        res.send({
            code: 200,
            status: true,
            message: "Categoria creado exitosamente",
            data: data
        })
    } catch (e) {
        console.log(e);
        res.send(e);
    }
}

const updateCategory = async (req, res) => {
    try {
        const _id = req.params.id;
        const { body } = req;
        const data = await categoryModel.findOneAndUpdate({_id}, body);
        if (data === null) {
            res.send({
                code: 200,
                status: false,
                message: "Categoria no encontrado",
            })
            return
        }
        console.log("Categoria actualizado", data);
        res.send({
            code: 200,
            status: true,
            message: "Categoria actualizado",
            data: data
        })
    } catch (e) {
        console.log(e);
        res.send(e);
    }
}

const deleteCategory = async (req, res) => {
    try {
        const _id = req.params.id;
        const data = await categoryModel.deleteOne({_id});
        if (data.deletedCount === 0) {
            res.send({
                code: 200,
                status: false,
                message: "Categoria no encontrado",
            })
            return
        }
        console.log("Categoria eliminado", data);
        res.send({
            code: 200,
            status: true,
            message: "Categoria Eliminado",
            data: data
        })
    } catch (e) {
        console.log(e);
        res.send(e);
    }
}

module.exports = {
    getCategoryById,
    getAllCategories,
    createCategory,
    updateCategory,
    deleteCategory,
}