const express = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');

const app = express();

// Configuración de Passport
passport.use(new LocalStrategy(
  (username, password, done) => {
    // Simulamos una base de datos con usuarios
    const users = [
      { id: 1, username: 'usuario1', password: 'contrasena1' },
      { id: 2, username: 'usuario2', password: 'contrasena2' }
    ];

    const user = users.find(u => u.username === username && u.password === password);
    
    if (user) {
      return done(null, user);
    } else {
      return done(null, false, { message: 'Credenciales inválidas.' });
    }
  }
));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  const user = users.find(u => u.id === id);
  done(null, user);
});

app.use(express.urlencoded({ extended: true }));
app.use(session({ secret: 'mysecretkey', resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => {
  res.send('¡Bienvenido a la aplicación con Passport.js!');
});

app.get('/login', (req, res) => {
  res.send('Por favor inicia sesión');
});

app.post('/login', passport.authenticate('local', {
  successRedirect: '/dashboard',
  failureRedirect: '/login'
}));

app.get('/dashboard', (req, res) => {
  if (req.isAuthenticated()) {
    res.send(`Bienvenido, ${req.user.username}!`);
  } else {
    res.redirect('/login');
  }
});

app.listen(3000, () => {
  console.log('Servidor escuchando en http://localhost:3000');
});
