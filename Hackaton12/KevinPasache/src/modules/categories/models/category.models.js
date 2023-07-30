const { Router } = require("express");
const mongoose = require("mongoose");
const routes = Router();

const Category = mongoose.model("Category", {
    name: String,
    description: String,
});

module.exports = Category;