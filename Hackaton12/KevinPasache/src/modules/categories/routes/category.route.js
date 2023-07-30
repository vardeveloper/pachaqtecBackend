const { Router } = require("express");
const { 
    findAll, 
    createCategory, 
    deleteOne,
    findOne,
} = require("../services/category.service");

const routes = Router();

routes.get("/", findAll);
routes.post("/", createCategory);
routes.delete("/", deleteOne);
routes.get("/id", findOne);

module.exports = routes;