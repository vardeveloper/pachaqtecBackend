const mongoose = require('mongoose');


const usuarioSchema = new mongoose.Schema({
    nombre: {type: String, required: true},
    edad: {type: Number, required: true},
    email : {type: String, required: true, unique: true},
    contraseña : {type: String, required: true}
});

const Usuario = mongoose.model('usuarios', usuarioSchema);

module.exports = Usuario;