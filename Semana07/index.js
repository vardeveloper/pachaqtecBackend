const express = require("express");
const app = express();

const { infoCursos } = require("./data/cursos");
const programacion = infoCursos.programacion;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Mi home");
})

app.get("/api/cursos", (req, res) => {
    res.send(infoCursos);
})

app.get("/api/cursos/programacion", (req, res) => {
    res.send(programacion);
})

app.get("/api/cursos/programacion/:lenguaje", (req, res) => {
    let lenguaje = req.params.lenguaje;

    const resultados = programacion.filter(curso => curso.lenguaje == lenguaje);

    if (resultados.length == 0) {
        return res.send("No hay cursos");
    }

    res.send(resultados);
})


// CRUD (READ)
app.get("/api/cursos/programacion/:lenguaje/:nivel", (req, res) => {
    let lenguaje = req.params.lenguaje;
    let nivel = req.params.nivel;

    const resultados = programacion.filter(curso => curso.lenguaje === lenguaje && curso.nivel === nivel);

    if (resultados.length == 0) {
        return res.send("No hay cursos");
    }

    res.status(200).send(resultados);
})

// crud (create) - GET
app.post("/api/cursos/programacion", (req, res) => {
    let cursoNuevo = req.body;
    programacion.push(cursoNuevo);
    res.send(programacion);
})

// crud (update) - PUT
app.put("/api/cursos/programacion/:id", (req, res) => {
    let curso_actualizado = req.body;
    const id = parseInt(req.params.id);

    const indice = programacion.findIndex(curso => curso.id === id);

    if (indice == -1) {
        return res.send("No encontro el curso");
    }

    programacion[indice] = curso_actualizado;
    res.send(programacion);
})

// crud (update) - PATCH
app.patch("/api/cursos/programacion/:id", (req, res) => {
    let curso_actualizado = req.body;
    const id = parseInt(req.params.id);

    const indice = programacion.findIndex(curso => curso.id === id);

    if (indice == -1) {
        return res.send("No encontro el curso");
    }

    let curso = programacion[indice];
    Object.assign(curso, curso_actualizado);

    res.send(programacion);
})

// crud (delete) - DELETE
app.delete("/api/cursos/programacion/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const indice = programacion.findIndex(curso => curso.id === id);
    if (indice == -1) {
        return res.send("No encontro el curso");
    }
    programacion.splice(indice, 1);
    res.send(programacion);
})

const PUERTO = process.env.PUERTO || "3000";

app.listen(3000, () => {
    console.log(`El servisor esta escuchando en el puerto ${PUERTO}`);
})
