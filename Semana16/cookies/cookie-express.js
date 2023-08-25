const express = require('express');
const cookieParser = require('cookie-parser'); // Middleware para manejar cookies

const app = express();
app.use(cookieParser()); // Usar el middleware de cookie-parser

app.get('/setcookie', (req, res) => {
    // Establecer una cookie llamada "miCookie" con el valor "Hola, esta es una cookie"
    res.cookie('miCookie', 'Hola, esta es una cookie', { maxAge: 900000 }); // Max-Age de 900 segundos (15 minutos)

    res.send('Cookie creada. Visita /getcookie para ver la cookie.');
});

app.get('/getcookie', (req, res) => {
    // Obtener el valor de la cookie "miCookie"
    const miCookieValue = req.cookies.miCookie;

    if (miCookieValue) {
        res.send(`Valor de la cookie "miCookie": ${miCookieValue}`);
    } else {
        res.send('La cookie "miCookie" no existe.');
    }
});

app.listen(3000, () => {
    console.log('Servidor escuchando en http://localhost:3000');
});
