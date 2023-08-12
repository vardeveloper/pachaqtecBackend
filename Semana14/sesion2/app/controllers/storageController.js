const fs = require("fs");
const storageModel = require("../models/storageModel");

URL_PUBLIC = process.env.PUBLIC_URL || "http://localhost:3001";
STORAGE_PATH = `${__dirname}/../storage`;

const getItem = async (req, res) => {
    try {
        const _id = req.params.id;
        const data = await storageModel.findById(_id)
        res.send(data);
    } catch (e) {
        console.error(e);
        res.send(e);
    }
}

const getItems = async (req, res) => {
    try {
        const data = await storageModel.find()
        res.send(data);
    } catch (e) {
        console.error(e);
        res.send(e);
    }
}

const createItem = (req, res) => {
    const { file } = req;

    const body = {
        url: `${URL_PUBLIC}/${file.filename}`,
        filename: file.filename
    }

    storageModel.create(body)
        .then(data => {
            res.send(data);
        })
        .catch(e => {
            console.error(e);
            res.send(e);
        })
}

const deleteItem = (req, res) => {
    const _id = req.params.id;

    storageModel.findById(_id)
        .then(data => {
            fs.unlinkSync(`${STORAGE_PATH}/${data.filename}`)
        })
        .catch(e => {
            console.error(e);
        })

    storageModel.deleteOne({ _id })
        .then(data => {
            res.send("Archivo y data eliminado!");
        })
        .catch(e => {
            console.error(e);
            res.send(e);
        })
}

module.exports = {
    getItem,
    getItems,
    createItem,
    deleteItem
}