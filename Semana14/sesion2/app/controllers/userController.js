const userModel = require("../models/userModel");

const getUser = (req, res) => {
    const _id = req.params.id;
    userModel.findById(_id)
        .then((data) => {
            console.log(`Usuario encontrado: ${data}`)
            res.send(data);
        })
        .catch((error) => {
            console.error(`Error al obtener usuario: ${error}`)
            res.send(`Error al obtener usuario`);
        })
}

const getAllUsers = (req, res) => {
    userModel.find()
        .then((data) => {
            console.log(`Usuarios encontrados: ${data}`)
            res.send(data);
        })
        .catch((error) => {
            console.error(`Error al obtener usuarios: ${error}`)
            res.send(`Error al obtener usuarios`);
        })
}

const createUser = (req, res) => {
    const { body } = req;
    userModel.create(body)
        .then((usuario) => {
            console.log(`Usuario creado: ${usuario}`);
            res.send("Usuario creado exitosamente");
        })
        .catch((error) => {
            console.error(`Error al crear el usuario: ${error}`);
            res.send(`Error al crear el usuario: ${error}`);
        });
}

const updateUser = (req, res) => {
    const { body } = req;
    const _id = req.params.id;
    userModel.findByIdAndUpdate(_id, body)
        .then((result) => {

            if (result === null) {
                res.send({
                    status: 204,
                    message: "Usuario no encontrado",
                });
                return
            }

            console.log(`Usuario actualizado: ${result}`)
            res.send({
                status: 200,
                message: "Usuario actualizado",
                data: result
            });
        })
        .catch((error) => {
            console.error("Error al actualizar el usuario: ", error);
            res.send(`Error al actualizar el usuario: ${error}`);
        })
}

const deleteUser = (req, res) => {
    const _id = req.body._id;
    userModel.findByIdAndRemove(_id)
        .then((result) => {

            console.log(" Resultado => ", result)

            if (result === null) {
                res.send({
                    status: 204,
                    message: "Usuario no encontrado",
                });
                return
            }

            console.log(`Usuario eliminado: ${result}`)
            res.send({
                status: 204,
                message: "Usuario eliminado",
                data: result
            });
        })
        .catch((error) => {
            console.error(`Error al eliminar el usuario: ${error}`)
            res.send(`Error al eliminar el usuario: ${error}`);
        })
}

module.exports = {
    getUser,
    getAllUsers,
    createUser,
    updateUser,
    deleteUser
}