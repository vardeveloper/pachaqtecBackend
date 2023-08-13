const express = require('express');
const app = express();
const connect = require('./mongo.js');
const Usuario = require('./models/usuario.js');


const port = process.env.PORT || 3000;

app.use(express.json());

app.post('/api/usuarios', (req, res) => {
    let dataUsuario = req.body;
    const nuevoUsuario = new Usuario(dataUsuario)

    nuevoUsuario.save()
        .then((usuario) => {
            console.log("Usuario creado", usuario);})
        .catch((err) => {console.error("Error al crear usuario",err);}); //
    res.send(nuevoUsuario);
});


app.patch('/api/usuarios/:id', (req, res) => {
    let data = req.body;
    const _id = req.params.id;
    const rsp = Usuario.findByIdAndUpdate(_id, data, {new: true})
        .then((result) => {console.log("Usuario actualizado", result);})
        .catch((err) => {console.error("Error al actualizar el usuario",err);});
    res.send(rsp);
});

app.get('/api/usuarios', (req, res) => {

    Usuario.find()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {console.error(err);});

});


app.delete('/api/usuarios/:id', (req, res) => {
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
});


app.listen(port, () => {
    console.log(`El server listening on port ${port}`);});

connect();