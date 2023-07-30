const express = require("express");
const mongoose = require("mongoose");
const categoryRoutes = require("../modules/categories/routes/category.route");
const productRoutes = require("../modules/product/routes/product.route")

class Server {
    constructor() {
        this.app = express();
        this.port = 4000;
        this.originPath = "/api";
        this.categoryPath = "/category";
        this.productPath = "/product";


        this.middleare();

        this.connectionDB();

        this.routes();
    }

    async connectionDB() {
        await mongoose.connect('mongodb://127.0.0.1:27017/idat');
    }

    middleare() {
        this.app.use(express.json());
    
    }
    
    routes() {
        this.app.use(this.originPath + this.categoryPath, categoryRoutes);
        this.app.use(this.originPath + this.productPath, categoryRoutes);
    
    }
    
    listen() {
        this.app.listen(this.port, () => {
    
          console.log(`Server escuchando en el puerto ${this.port} 🚀🚀`);
    
        });
    
    }
    
}
  
    
module.exports = Server;