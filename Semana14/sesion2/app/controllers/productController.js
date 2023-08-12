const productModel = require("../models/productModel");

const getItemById = async (req, res) => {
    try {
        const _id = req.params.id;
        const data = await productModel.findOneData(_id)
        console.log(`Producto encontrado: ${data}`)
        res.send(data);
    } catch (e) {
        console.error(e);
        res.send(e);
    }
}

const getAllItems = (req, res) => {
    productModel.find()
        .then((data) => {

            console.log(`${data}`)

            if (data === null) {
                res.send({
                    status: 204,
                    message: "No hay data",
                });
                return
            }

            console.log(`Productos encontrados: ${data}`)
            res.send(data);
        })
        .catch((error) => {
            console.error(`Error al obtener productos: ${error}`)
            res.send(`Error al obtener productos`);
        })
}

const createItem = (req, res) => {
    const { body } = req;
    productModel.create(body)
        .then((producto) => {
            console.log(`Producto creado: ${producto}`);
            res.send("Producto creado exitosamente");
        })
        .catch((error) => {
            console.error(`Error al crear el producto: ${error}`);
            res.send(`Error al crear el producto: ${error}`);
        });
}

const updateItem = (req, res) => {
    const { body } = req;
    const _id = req.params.id;
    productModel.findByIdAndUpdate(_id, body)
        .then((result) => {

            if (result === null) {
                res.send({
                    status: 204,
                    message: "Producto no encontrado",
                });
                return
            }

            console.log(`Producto actualizado: ${result}`)
            res.send({
                status: 200,
                message: "Producto actualizado",
                data: result
            });

        })
        .catch((error) => {
            console.error("Error al actualizar el producto: ", error);
            res.send(`Error al actualizar el producto: ${error}`);
        })
}

const deleteItem = (req, res) => {
    const _id = req.body._id;
    productModel.findByIdAndRemove(_id)
        .then((result) => {

            console.log(" Resultado => ", result)

            if (result === null) {
                res.send({
                    status: 204,
                    message: "Producto no encontrado",
                });
                return
            }

            console.log(`Producto eliminado: ${result}`)
            res.send({
                status: 204,
                message: "Producto eliminado",
                data: result
            });
        })
        .catch((error) => {
            console.error(`Error al eliminar el producto: ${error}`)
            res.send(`Error al eliminar el producto: ${error}`);
        })
}

module.exports = {
    getItemById,
    getAllItems,
    createItem,
    updateItem,
    deleteItem
}