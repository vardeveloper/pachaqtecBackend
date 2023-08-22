const uploadMiddleware = require("../helpers/hadleStorage.js");
const fs = require('fs');
const storageModel = require("../models/storageModel.js");

STORAGE_PATH = `${__dirname}/../storage`;

const findAllStorage = async (req, res) => {
    try {
        const data = await storageModel.find()
        res.send(data);
    } catch (err) {
        console.error(err);
        res.send("could not find");
    }
        
}

const agregarArchivo = (req, res) => {
    const file = req.file;

    const body = {
        url: `http://localhost:3000/${file.filename}`,
        filename: file.filename
    };

    storageModel.create(body)
        .then(response => {
            res.send(response);
        })
        .catch(error => {
            console.log(error);
            res.send("Error al guaradr el archivo");
        });
}

const elimnarArchivo = (req, res) => {
    const _id = req.params.id;
    storageModel.findById(_id)
        .then(response => {
            fs.unlinkSync(`${STORAGE_PATH}/${response.filename}`);
        })
        .catch(error => {
            res.send("Error al eliminar el archivo");
        });
    storageModel.findByIdAndRemove(_id)
        .then(response => {
            res.send("Archivo eliminado");
        })
        .catch(error => {
            console.log(error);
            res.send("Error al eliminar el archivo");
        });
    
}

module.exports = {
    findAllStorage,
    agregarArchivo,
    elimnarArchivo,
};