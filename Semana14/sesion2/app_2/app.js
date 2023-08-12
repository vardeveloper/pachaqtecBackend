const express = require("express");
const connect = require("./config/mongo");

const usersRouter = require("./routes/users");
const storageRoter = require("./routes/storage");
const productsRoter = require("./routes/products");

const loggerMiddleware = require("./middlewares/loggerMiddleware");

const app = express();

app.use(express.json());
app.use(express.static("storage"));
app.use(loggerMiddleware);

app.use('/api/usuarios', usersRouter);
app.use('/api/storage', storageRoter); 
app.use('/api/productos', productsRoter); 

const port = process.env.PORT || "3001";

app.listen(port, () => {
    console.log(`El servidor esta escuchando en el puerto ${port}`);
})

connect()
