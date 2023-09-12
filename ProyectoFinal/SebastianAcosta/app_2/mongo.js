const mongoose = require('mongoose');

const dbUrl = process.env.DB_URL;

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