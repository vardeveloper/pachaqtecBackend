const express = require('express');
const app = express();
const port = 3001; // Puerto en el que se ejecutará la aplicación

// Configura el motor de plantillas EJS
app.set('view engine', 'ejs');


app.use('/static', express.static('public'))

// Datos de ejemplo de productos (puedes obtener estos datos de tu base de datos)
const productos = [
  { id: 1, nombre: 'Producto 1', precio: 19.99 },
  { id: 2, nombre: 'Producto 2', precio: 29.99 },
  { id: 3, nombre: 'Producto 3', precio: 39.99 },
];

// Ruta para mostrar la lista de productos
app.get('/productos', (req, res) => {
  // Renderiza la plantilla 'productos.ejs' y pasa los datos de los productos
  res.render('productos', { productos });
});

// Inicia el servidor en el puerto especificado
app.listen(port, () => {
  console.log(`La aplicación está funcionando en http://localhost:${port}`);
});
