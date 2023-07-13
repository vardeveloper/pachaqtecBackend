const express = require("express")
const user = require("../modules/user/routes/user.route");
const product = require("../modules/product/routes/product.route");

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT || 3000;
        this.userPath = "/api/users"
        this.productPath = "/api/products"

        this.middleare();

        this.routers();
    }

    middleare() {
        this.app.use(express.json());
    }

    routers() {
        this.app.use(this.userPath, user);
        this.app.use(this.productPath, product);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server escuchando en puerto ${this.port}`);
        });
    }
}

module.exports = Server;