const express = require("express");
const mongoose = require("mongoose");
const categoryRoutes = require("../modules/categories/routes");
const ProductRoutes = require("../modules/product/routes/");
const http = require("http");
const { Server: SocketServer } = require("socket.io")

class Server {
  constructor() {
    this.app = express();
    this.port = 4001;
    this.originPath = "/api";
    this.categoryPath = "/category";
    this.productPath = "/product";
    this.userPath = "/user";
    this.groupPath = "/group";
    this.server = http.createServer(this.app);
    this.io = new SocketServer(this.server, {
      cors: {
        origin: ["http://localhost:4001/", "http://192.168.1.13:4001/"],
      },
    });

    //middleare

    this.middleare();

    //conection db
    this.connectionDb();

    // rutas
    this.routes();

    this.socket();
  }

  async connectionDb() {
    await mongoose.connect("mongodb://127.0.0.1:27017/idat");
  }
  middleare() {
    //parse and reading of body
    this.app.use(express.json());
  }

  routes() {
    this.app.use(this.originPath + this.categoryPath, categoryRoutes);
    this.app.use(this.originPath + this.productPath, ProductRoutes);
  }

  socket() {
    this.io.on("connection", (socket) => {
      console.log(socket.id);
      console.log("un usuario más conectado");
      socket.on("chat message", (msg) => {
        console.log(msg);
        this.io.emit("chat message", msg.message);
        createMessage(msg.from, msg.message);
      });
    });
  }
  
  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server escuchando en puerto ${this.port} 🚀🚀`);
    });
  }
}

module.exports = Server;
