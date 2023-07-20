const { response } = require("express");
const { v4: uuidv4 } = require('uuid');

const products = [
    {id: uuidv4(), nombre: "jabon", descripcion: "Jabon para lavar", precio: 15.3, cantidad : 100, categoria : "higiene"},
    {id: uuidv4(), nombre: "shampoo", descripcion: "shampoo para el cabello", precio: 20.1, cantidad : 100, categoria : "higiene"},
    {id: uuidv4(), nombre: "cuaderno", descripcion: "cuaderno para dibujar", precio: 9.99, cantidad : 100, categoria : "papeleria"},
]


class Product {
    constructor(){}

    getProduct(req, res){
        let params = req['params'];
        let product = products.filter(p => p.id == params['id'])
        if (product.length <= 0){
            res.status (404);
            res.json({"Message" : "No se encontró el producto"});
        }else{
            res.status(200);
            res.json(product)
        }
    }

    getProducts(req, res){
        res.status(200);
        res.json(products);
    }

    createProduct(req, res){
        let product = {id : uuidv4(), ...req.body};
        products.push(product);
        res.status(201);
        res.json(product);
    }

    updateProduct(req, res){
        let params = req['params'];
        let product_index = products.findIndex(p => p.id == params['id']);
        products[product_index] = {id : params['id'], ...req.body};
        res.status(201);
    }

    deleteProduct(req, res){
        let params = req['params'];
        let product_index = products.findIndex(u => u.id == params['id']);
        products.splice(product_index, 1);
        res.status(200);

    }
}

const product = new Product();


module.exports = product;