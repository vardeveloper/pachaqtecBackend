require('dotenv').config()
const cors = require("cors");
const express = require("express");
const connect = require("./mongo.js");
const session = require("express-session");
const bodyParser = require("body-parser");
const path = require('path');
const FileStore = require('session-file-store')(session);

const usersRouter = require("./routes/usersRoute");
const storageRouter = require("./routes/storageRoute");
const productsRouter = require("./routes/productRoute");
const ordersRouter = require("./routes/orderRoute");
const categoriesRouter = require("./routes/categoryRoute");
const {compare} = require('./helpers/encrypt.js');

const Usuario = require('./models/usuarioModel');

const loggerMiddleware = require("./middlewares/loggerMiddleware");

const app = express();

app.use(cors());

var options = {
    //store: new FileStore({path: "./sessions"}),
    secret: "secret",
    resave: false,
    saveUninitialized: true,
    name: 'my.connect.sid'
}

app.use(session(options));

app.use(express.urlencoded({ extended: true }));

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

const users = [
    { username: 'user1', password: 'pass1' },
    { username: 'user2', password: '$2a$10$tFcYsp4SHeeiSdloNXpXReg7ExptGUQ1hczYJFv/X1VBYYImAW7KO' } // pass2
];

// Middleware para verificar la sesión activa
const checkSession = (req, res, next) => {
    if (req.session.isLoggedIn) {
        next(); // Si la sesión está activa, continuar con la siguiente función
    } else {
        res.redirect('/login'); // Si la sesión no está activa, redirigir a la página de inicio de sesión
    }
};

// Incrementar o inicializar contador de visitas en la sesión
app.get('/', (req, res) => {
    if (req.session.visits) {
        req.session.visits++;
    } else {
        req.session.visits = 1;
    }
    res.send(`Bienvenido! Has visitado esta página ${req.session.visits} veces.`);
});

// Ruta para mostrar el formulario de inicio de sesión
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Ruta para procesar el formulario de inicio de sesión
app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    const user = await Usuario.findOne({nombre: new RegExp(username)})
                        .then((result) => {
                            const check = compare(password, result.contraseña)
                            req.session.isLoggedIn = true;
                            req.session.username = username;
                            if (result != undefined && check) {
                                res.redirect('/dashboard');
                                console.log('entro al dashboard');
                            } else {
                                res.send('Credenciales incorrectas. <a href="/login">Volver al inicio de sesión</a>');
                            }
                        })
                        .catch((err) => {console.error(err);});
});

// Ruta protegida: el usuario debe estar autenticado para acceder
app.get('/dashboard',checkSession, (req, res) => {
    res.send(`Bienvenido, ${req.session.username}!<br><a href="/logout">Cerrar Sesión</a>`);
});

// Ruta para cerrar sesión
app.get('/logout', (req, res) => {
    req.session.destroy(function(err) {
        if (err) {
          console.error(err);
        } else {
          res.clearCookie(options.name);
          res.redirect('/login');
        }
      });
});

app.listen(port, () => {
    console.log(`El servidor esta escuchando en el puerto ${port}`);
})

connect()