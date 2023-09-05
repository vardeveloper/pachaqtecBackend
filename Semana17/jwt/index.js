require('dotenv').config()

const express = require('express');
const jwt = require("jsonwebtoken");

const {encrypt, compare} = require('./helpers');

const app = express();

app.use(express.urlencoded({ extended: true }));

const users = [
    { 
        _id: '64cb18741b04dbc8d946c311', 
        username: 'user2', 
        password: '$2a$10$tFcYsp4SHeeiSdloNXpXReg7ExptGUQ1hczYJFv/X1VBYYImAW7KO' // pass2
    }
];

const authenticateToken = (req, res, next) => {
    //const authHeader = req.headers["authorization"];
    //const token = authHeader && authHeader.split(" ").pop()
    const token = req.header('x-auth-token')
    if (token == null) {
        return res.status(401).send("Access denied");
    }
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            res.status(403).send("Access denied, token expired or incorrect")
        } else {
            req.user = user
            next()
        }
    })
};

const generateToken = (user) => {
    return jwt.sign(user, process.env.JWT_SECRET, {expiresIn: "5m"})
};


app.get('/', authenticateToken, (req, res) => {
    const user = req.user
    console.log("", user)
    res.send(`Bienvenido a la aplicación con JWT`);
});

app.get('/login', (req, res) => {
    res.send(`
    <h1>Iniciar Sesión</h1>
    <form method="post" action="/login">
        <input type="text" name="username" placeholder="Nombre de usuario" required><br>
        <input type="password" name="password" placeholder="Contraseña" required><br>
        <button type="submit">Iniciar Sesión</button>
    </form>
    `);
});

// Ruta para procesar el formulario de inicio de sesión
app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    //console.log("", username, password);

    //const pass =  await encrypt(password);
    //console.log("clave: ", password);
    //console.log("clave encriptado: ", pass);
    
    const user = users.find(u => u.username === username);
    const check = await compare(password, user.password)

    if (user && check) {
        const data = {
            _id: user._id,
            username: user.username
        }
        const token = generateToken(data)
        res.json({
            token,
            data
        })
    } else {
        res.send('Credenciales incorrectas. <a href="/login">Volver al inicio de sesión</a>');
    }
});

// Ruta protegida con JWT
app.get('/protected', (req, res) => {
    const token = req.header('x-auth-token');
    //console.log("", token);

    if (!token) {
        return res.status(401).json({ message: 'Token no proporcionado. Acceso denegado.' });
    }

    try {
        // Verificar y decodificar el JWT
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        res.json(decoded);
    } catch (error) {
        res.status(400).json({ message: 'Token inválido.' });
    }
});

app.listen(3000, () => {
    console.log('Servidor escuchando en http://localhost:3000');
});
