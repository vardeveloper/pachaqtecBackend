const mongoose = require("mongoose");

// URL de conexión a la base de datos de MongoDB (cambia 'nombre_db' por el nombre de tu base de datos)
const dbUrl = process.env.DB_URL;

// Opciones de configuración de la conexión
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

const dbConnect = () => {
    mongoose.connect(dbUrl, options)
        .then(() => {
            console.log("Conexión a MongoDB OK");
        })
        .catch((err) => {
            console.error("Error al conectar a MongoDB:", err);
        })
}

module.exports = dbConnect;
