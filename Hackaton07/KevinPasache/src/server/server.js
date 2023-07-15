const express = require("express")
const user = require("../modules/user/routes/user.route");
const product = require("../modules/product/routes/product.route");
const almacen = require("../modules/almacen/routes/almacen.route");
const carrito = require("../modules/carritodecompras/routes/carrito.route")

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT || 3000;
        this.userPath = "/api/users";
        this.productPath = "/api/products";
        this.almacenPath ="/api/almacen";
        this.carritoPath = "/api/carrito";

        this.middleare();

        this.routers();
    }

    middleare() {
        this.app.use(express.json());
    }

    routers() {
        this.app.use(this.userPath, user);
        this.app.use(this.productPath, product);
        this.app.use(this.almacenPath,almacen);
        this.app.use(this.carritoPath, carrito);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server escuchando en puerto ${this.port}`);
        });
    }
}

module.exports = Server;