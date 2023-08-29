const Usuario = require('../models/usuarioModel');
const {encrypt} = require('../helpers/encrypt');


const getAllUsers = (req, res) => {
    Usuario.find()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {console.error(err);});
}

const compareUser = (req, res) => {
    const { username, password } = req.body;

    const user =  Usuario.findOne({nombre: new RegExp(username), contraseña: new RegExp(password)})
                        .then((result) => {
                            res.send(result);
                        })
                        .catch((err) => {console.error(err);});
}

const insertUser = async (req, res) => {
    let dataUsuario = req.body;
    dataUsuario.contraseña = await encrypt(dataUsuario.contraseña);
    const nuevoUsuario = new Usuario(dataUsuario);

    nuevoUsuario.save()
        .then((usuario) => {
            console.log("Usuario creado", usuario);})
        .catch((err) => {console.error("Error al crear usuario",err);}); //
    res.send(nuevoUsuario);
}

const updateUsuario = (req, res) => {
    let data = req.body;
    const _id = req.params.id;
    const rsp = Usuario.findByIdAndUpdate(_id, data, {new: true})
        .then((result) => {console.log("Usuario actualizado", result);})
        .catch((err) => {console.error("Error al actualizar el usuario",err);});
    res.send(rsp);
}

const eliminarUsuario = (req, res) => {
    const _id = req.params.id;
    Usuario.findByIdAndRemove(_id)
        .then((result) => {
            console.log("Usuario eliminado", result);
            res.send(result);
    })
        .catch((err) => {
            console.error("Error al eliminar el usuario",err);
            res.send(err);
        });
}


module.exports = {
    getAllUsers,
    insertUser,
    eliminarUsuario,
    updateUsuario,
    compareUser,
}