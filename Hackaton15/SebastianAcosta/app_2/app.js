require('dotenv').config()
const cors = require("cors");
const express = require("express");
const connect = require("./mongo.js");
const session = require("express-session");
const bodyParser = require("body-parser");

const usersRouter = require("./routes/usersRoute");
const storageRouter = require("./routes/storageRoute");
const productsRouter = require("./routes/productRoute");
const ordersRouter = require("./routes/orderRoute");
const categoriesRouter = require("./routes/categoryRoute");

const loggerMiddleware = require("./middlewares/loggerMiddleware");

const app = express();

app.use(cors());
app.use(session({
    secret: "secret",
    resave: false,
    saveUninitialized: true
}));

app.use(bodyParser.urlencoded({ extended: true}));

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