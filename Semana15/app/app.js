require('dotenv').config()
const cors = require("cors");
const express = require("express");
const connect = require("./config/mongo");

const usersRouter = require("./routes/users");
const storageRouter = require("./routes/storage");
const productsRouter = require("./routes/products");
const ordersRouter = require("./routes/orders");
const categoriesRouter = require("./routes/categories");

const loggerMiddleware = require("./middlewares/loggerMiddleware");

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.static("storage"));
app.use(loggerMiddleware);

app.use('/api/usuarios', usersRouter);
app.use('/api/storage', storageRouter);
app.use('/api/productos', productsRouter);
app.use('/api/pedidos', ordersRouter);
app.use('/api/categorias', categoriesRouter);

app.disable('x-powered-by') // deshabilita el header X-Powered-By: Express

const port = process.env.PORT || "3002";

app.listen(port, () => {
    console.log(`El servidor esta escuchando en el puerto ${port}`);
})

connect()
