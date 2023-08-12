const mongoose = require("mongoose");

const usuarioSchema = new mongoose.Schema({
    nombre: { type: String, require: true },
    edad: { type: Number, require: true },
    email: { type: String, require: true, unique: true }
});

const Usuario = mongoose.model("users", usuarioSchema);

module.exports = Usuario;
