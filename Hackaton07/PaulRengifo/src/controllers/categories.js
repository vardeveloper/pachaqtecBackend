const { response } = require("express");
const { v4: uuidv4 } = require('uuid');

const categories = [
    {id: uuidv4(), nombre : "higiene", descripcion : "Productos para la higiene"}
]



class Category {
    constructor(){}

    getCategory(req, res){
        let params = req['params'];
        let category = categories.filter(c => c.id == params['id'])
        if (category.length <= 0){
            res.status (404);
            res.json({"Message" : "No se encontró la categoria"});
        }else{
            res.status(200);
            res.json(category)
        }
    }

    getCategories(req, res){
        res.status(200);
        res.json(categories);
    }

    createCategory(req, res){
        let category = {id : uuidv4(), ...req.body};
        categories.push(category);
        res.status(201);
        res.json(category);
    }

    updateCategory(req, res){
        let params = req['params'];
        let category_index = categories.findIndex(c => c.id == params['id']);
        categories[category_index] = {id : params['id'], ...req.body};
        res.status(201);
    }

    deleteCategroy(req, res){
        let params = req['params'];
        let category_index = categories.findIndex(c => c.id == params['id']);
        categories.splice(category_index, 1);
        res.status(200);

    }
}

const category = new Category();


module.exports = category;