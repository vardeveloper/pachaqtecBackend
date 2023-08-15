const { Router } = require("express");
const mongoose = require("mongoose");
const routes = Router();

const Category = mongoose.model("Category", {
    name: String,
    description: {
        type:String,
    },
    slug: {
        type:String,
        default:null,
    },
    parentCategory: {
        type: mongoose.Types.ObjectId,
        ref: "Category",
    },
});

module.exports = Category;