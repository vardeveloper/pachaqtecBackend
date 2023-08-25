const path = require('path');

const express = require('express');
const session = require('express-session');
const FileStore = require('session-file-store')(session);

const {encrypt, compare} = require('./helpers');

const app = express();

/**
 * configura el middleware de análisis URL-encoded en la aplicación Express 
 * para que pueda manejar los datos enviados desde formularios HTML en las solicitudes POST. 
 * Esta configuración es necesaria para que puedas acceder a los valores 
 * de los campos del formulario en las rutas de tu aplicación.
 */
app.use(express.urlencoded({ extended: true }));

// Configuración de sesión con almacenamiento en archivos
app.use(session({
    store: new FileStore({ path: './sessions' }),
    secret: 'mysecretkey',
    resave: false,
    saveUninitialized: true
}));

// Datos simulados de usuarios (por simplicidad)
const users = [
    { username: 'user1', password: 'pass1' },
    { username: 'user2', password: '$2a$10$tFcYsp4SHeeiSdloNXpXReg7ExptGUQ1hczYJFv/X1VBYYImAW7KO' } // pass2
];

// Middleware para verificar la sesión activa
const checkSession = (req, res, next) => {
    if (req.session && req.session.isLoggedIn) {
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
    res.send(`
    <h1>Iniciar Sesión</h1>
    <form method="post" action="/login">
        <input type="text" name="username" placeholder="Nombre de usuario" required><br>
        <input type="password" name="password" placeholder="Contraseña" required><br>
        <button type="submit">Iniciar Sesión</button>
    </form>
    `);
});

// Página de inicio
app.get('/login2', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Ruta para procesar el formulario de inicio de sesión
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        req.session.isLoggedIn = true;
        req.session.username = username;
        res.redirect('/dashboard');
    } else {
        res.send('Credenciales incorrectas. <a href="/login">Volver al inicio de sesión</a>');
    }
});

// Ruta para procesar el formulario de inicio de sesión
app.post('/login2', async (req, res) => {
    const { username, password } = req.body;

    const pass =  await encrypt(password);
    console.log("clave: ", password);
    console.log("clave encriptado: ", pass);
    
    const user = users.find(u => u.username === username);
    const check = await compare(password, user.password)

    if (user && check) {
        req.session.isLoggedIn = true;
        req.session.username = username;
        res.redirect('/dashboard');
    } else {
        res.send('Credenciales incorrectas. <a href="/login">Volver al inicio de sesión</a>');
    }
});

// Ruta protegida: el usuario debe estar autenticado para acceder
app.get('/dashboard', checkSession, (req, res) => {
    res.send(`Bienvenido, ${req.session.username}!<br><a href="/logout">Cerrar Sesión</a>`);
});

// Ruta para cerrar sesión
app.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/login');
});

app.listen(3000, () => {
    console.log('Servidor escuchando en http://localhost:3000');
});
