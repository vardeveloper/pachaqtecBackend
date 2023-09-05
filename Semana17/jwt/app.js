const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();

// Secret key para firmar y verificar el JWT
const secretKey = 'miClaveSecreta';

app.get('/', (req, res) => {
    res.send('¡Bienvenido a la aplicación con JWT!');
});

// Ruta para generar y enviar un JWT
app.get('/login', (req, res) => {
    const user = { id: 1, username: 'usuario123' };

    // Generar un JWT con el usuario y la clave secreta
    const token = jwt.sign(user, secretKey);

    res.json({ token });
});

// Ruta protegida con JWT
app.get('/protected', (req, res) => {
    const token = req.header('x-auth-token');

    if (!token) {
        return res.status(401).json({ message: 'Token no proporcionado. Acceso denegado.' });
    }

    try {
        // Verificar y decodificar el JWT
        const decoded = jwt.verify(token, secretKey);

        res.json(decoded);
    } catch (error) {
        res.status(400).json({ message: 'Token inválido.' });
    }
});

app.listen(3000, () => {
    console.log('Servidor escuchando en http://localhost:3000');
});
