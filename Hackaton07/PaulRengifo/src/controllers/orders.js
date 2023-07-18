const { response } = require("express");
const { v4: uuidv4 } = require('uuid');

const orders = [
    {id: uuidv4(), id_usuario: 1, fecha : "2023-07-07 10:10:10", estado : "pendiente"},
]


class Order {
    constructor(){}

    getOrder(req, res){
        let params = req['params'];
        let order = orders.filter(o => o.id == params['id'] && o.id_usuario == params['id_usuario'])
        if (order.length <= 0){
            res.status (404);
            res.json({"Message" : "No se encontró la orden"});
        }else{
            res.status(200);
            res.json(order)
        }
    }

    getOrders(req, res){
        let params = req['params'];
        let order = orders.filter(o => o.id_usuario == params['id_usuario'])
        if (order.length <= 0){
            res.status (404);
            res.json({"Message" : "No se encontró la orden"});
        }else{
            res.status(200);
            res.json(order)
        }
    }

    createOrder(req, res){
        let params = req['params'];
        let order = {id : uuidv4(), id_usuario : params['id_usuario'], ...req.body};
        orders.push(order);
        res.status(201);
        res.json(order);
    }

    updateOrder(req, res){
        let params = req['params'];
        let order_index = orders.findIndex(o => o.id == params['id']);
        orders[order_index] = {id : params['id'], id_usuario : params['id_usuario'], ...req.body};
        res.status(201);
    }

    deleteOrder(req, res){
        let params = req['params'];
        let order_index = orders.findIndex(o => o.id == params['id']);
        orders.splice(order_index, 1);
        res.status(200);

    }
}

const order = new Order();


module.exports = order;