const {request, response } = require("express");
const Category = require("../models/category.model");

const createCategory = async (req = request, res = response)=> {
    const { name, description, slug, parentCategory } = req.body;
    const newCategory = await new Category({
    name,
    description,
    slug,
    parentCategory,    
    }).save();
    await newCategory.populate("parentCategory");

    console.log(newCategory);

    res.json(newCategory);
};

const findAll = async (req = request, res = response) => {
    const categories = await Category.find({}).populate("parentCategory");
    res.json(categories);
};
const deleteOne = async (req = request, res = response) => {
    const { id } = req.body;
    const result = await Category.findByIdAndDelete(id);
    if (result){
        res.json({delete: true});
        } else{
        res.json({delete: false});
    }
};

module.exports = {
    findAll,
    createCategory,
    deleteOne,
};