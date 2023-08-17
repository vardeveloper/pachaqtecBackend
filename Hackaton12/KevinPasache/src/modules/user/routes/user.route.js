const { Router } = require("express");
const uploadImage = require("../../../middleware/file.middleware")
const { createUser, login } = require("../services/user.service")

const routes = Router();

routes.post("/", uploadImage, createUser);

routes.post("/login", login);

module.exports = routes;