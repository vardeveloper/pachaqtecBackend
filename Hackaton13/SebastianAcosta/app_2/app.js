const express = require('express');
const app = express();
const connect = require('./mongo.js');
const usersRouter = require("./routes/usersRoute.js");
const storageRouter = require("./routes/storageRoute.js");
const loggerMiddleware = require("./middlewares/loggerMiddleware.js");

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static("storage"));
app.use(loggerMiddleware);

app.use("/",usersRouter);
app.use("/",storageRouter);


app.listen(port, () => {
    console.log(`El server listening on port ${port}`);});

connect();