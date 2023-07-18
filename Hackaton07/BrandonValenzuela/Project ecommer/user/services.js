const { response, request } = require("express");
const User = require("./entidad");

function crearUsuario(req = request, res = response) {
    
    const { name } = req.body;

    if(!name){
        throw new Error("nombre es requerido");
        
    };

    const newUser = new User(name);

    console.log(req.body);
    res.json(newUser);

}

module.exports = { crearUsuario };