const mongoose = require('mongoose');

const almacenSchema = new mongoose.Schema({
    Productos: Array,
},
{
    versionKey: false,
    timestamps: true,
});


module.exports = mongoose.model("almacen", almacenSchema);