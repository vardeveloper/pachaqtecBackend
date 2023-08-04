const { Router } = require("express");
const {
  createCaegory,
  findAll,
  deleteOne,
} = require("../Services/category.service");

const routes = Router();

routes.post("/", createCaegory);
routes.get("/", findAll);
routes.delete("/", deleteOne);
module.exports = routes;