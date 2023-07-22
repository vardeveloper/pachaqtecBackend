const { response } = require("express");
const { v4: uuidv4 } = require('uuid');

const users = [
    {id: uuidv4(), nombre: 'Pablo', edad: 25, dni : 12123890, email : "pablo@hotmail.com"},
    {id: uuidv4(), nombre: 'Luis', edad: 23, dni : 12123891, email : "luis@gmail.com"},
    {id: uuidv4(), nombre: 'José', edad: 22, dni : 12123892, email : "jose@yahoo.es"},
]

class User {

    constructor() {}

    getUser(req, res){
        let params = req['params'];
        let user = users.filter(u => u.id == params['id'])
        if (user.length <= 0){
            res.status(404);
            res.json({"Message" : "No se encontro ningun usuario"});
        }else{
            res.status(200);
            res.json(user);
        }
    }

    getUsers(req, res){
        res.status(200);
        res.json(users);
    }

    createUser(req, res){
        let user = {id : uuidv4(), ...req.body};
        console.log(user);
        users.push(user)
        res.status(201);
        res.json(user);
    }

    updateUser(req, res){
        let params = req['params'];
        let user_index = users.findIndex(u => u.id == params['id'])
        users[user_index] = {id : params['id'], ...req.body};
        console.log(users[user_index]);
        res.status(201);
    }

    deleteUser(req, res){
        let params = req['params'];
        let user_index = users.findIndex(u => u.id == params['id'])
        users.splice(user_index, 1)
        console.log(req);
        res.status(200);
    }
}

const user = new User();

module.exports = user;