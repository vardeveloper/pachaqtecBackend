const mongoose = require('mongoose');

const carritoSchema = new mongoose.Schema({
    username: {type: String, required: true, unique: true},
    productos: Array,
},
{
    versionKey: false,
    timestamps: true,
});


module.exports = mongoose.model("carrito", carritoSchema);