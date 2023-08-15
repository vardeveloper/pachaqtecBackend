const mongoose = require('mongoose');

const dbUrl = "mongodb://127.0.0.1:27017/";

const options = {
    UseNewUrlParser: true,
    useUnifiedTopology: true,
};

const dbConnection = () => {
    mongoose.connect(dbUrl, options)
    .then(() => {
        console.log("Conexion a Mongo Existosa");
    })
    .catch((err) => console.error(err));
};

module.exports = dbConnection;