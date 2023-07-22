const { Router } = require("express");
const { crearUsuario } = require("./services");

const routerUser = Router();


routerUser.get("/api2/user", (req, res) => {
    res.json({"version": "V2.0"})

});

routerUser.post("/api2/create", crearUsuario);

routerUser.post("/api2/create", crearUsuario);

routerUser.post("/api2/create", crearUsuario);


module.exports = routerUser;