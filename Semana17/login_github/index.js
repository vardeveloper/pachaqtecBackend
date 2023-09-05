const express = require("express");
const passport = require("passport");
const GitHubStrategy = require("passport-github").Strategy;

const app = express();

// configuracion de la estrategia de autenticaión de GitHub
passport.use(new GitHubStrategy({
    clientID: "69a401290c09766e42b1",
    clientSecret: "68193814e90f2da1bb7dd885c6c2220048224d56",
    callbackURL: "http://localhost:3001/auth/github/callback"
}, function (accessToken, resfreshToken, profile, done) {
    return done(null, profile);
}));

// Configuración de Passport para almacenar el usuario en la sesión
passport.serializeUser( (user, done) => {
    done(null, user);
})

passport.deserializeUser( (user, done) => {
    done(null, user);
})

// Configuración de Express
app.use(require("express-session")({ secret: "tu_secreto", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => {
    res.send("Bienvenido, login con GitHub")
})

// Ruta de inicio de sesión con GitHub
app.get('/auth/github', passport.authenticate('github'));

// Ruta del logout con GitHub
app.get('/logout', (req, res, next) => {
    req.logout( (e) => {
        if (e) { return next(e); }
        res.redirect("/");
    });
});

// Ruta de redirección después de la autenticación con GitHub
app.get('/auth/github/callback', 
    passport.authenticate("github", { failureRedirect: '/' }),
    (req, res) => {
        res.redirect("/profile") // se redirige al perfil del usuario o otra url
    }
);

// Ruta protegida que requiere autenticación
app.get("/profile", isAuthenticated, (req, res) => {
    res.send("Bienvenido a tu perfil")
})

// creamos una función que es un middelware, que valida la autentiación 
function isAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect("/");
}

app.listen(3001, () => {
    console.log("Aplicación de inicio de sesión con GitHub en http://localhost:3001");
})


