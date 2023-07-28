const express = require("express");
const connect = require("./config/mongo");
const app = express();

const port = process.env.PORT || "3000";

const Usuario = require("./models/usuario");

app.use(express.json());

app.post("/api/usuarios", (req, res) => {
    let dataUsuario = req.body;

    const modeloUsuario = new Usuario(dataUsuario)

    modeloUsuario.save()
        .then((usuario) => {
            console.log("Usuario creado:", usuario);
        })
        .catch((err) => {
            console.error("Error al crear el usuario", err);
        });

    res.send("Usuario creado");
})

app.patch("/api/usuarios/:id", (req, res) => {
    let data = req.body;
    const _id = req.params.id;

    Usuario.findByIdAndUpdate(_id, data, { new: true })
        .then((result) => {
            console.log(`Usuario actualizado: ${result}`)
        })
        .catch((err) => {
            console.err("Error al actualizar el usuario", err);
        })

    res.send("Usuario actualizado");
})

app.get("/api/usuarios", (req, res) => {
    Usuario.find() // db.usuarios.find()
        .then((data) => {
            console.log(`Usuarios enontrados ${data}`)
            res.send(data);
        })
        .catch((err) => {
            console.error(`Error al obtener usuarios ${err}`)
            res.send(`Error al obtener usuarios ${err}`);
        })
    
})

app.delete("/api/usuarios", (req, res) => {
    const _id = req.body._id;

    Usuario.findByIdAndRemove(_id)
        .then((data) => {
            console.log(`Usuario eliminado: ${data}`)
            res.send(data);
        })
        .catch((err) => {
            console.error(`Error al eliminar el usuario: ${err}`)
            res.send(`Error al eliminar el usuario: ${err}`);
        })
})


app.listen(port, () => {
    console.log(`El servidor esta escuchando en el puerto ${port}`);
})

connect()
