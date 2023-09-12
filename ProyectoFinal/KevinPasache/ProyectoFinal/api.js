import express, { json } from 'express';
import { lotesRouter } from './routes/lotesRoutes.js';

// import lotes from './lotes.json' with {type: 'json'}; // se utilizara pronto para que pueda importar json

// forma de leer json en ESModules
//import fs from 'node:fs';
//const lotes = JSON.parse(fs.readFileSync('./lotes.json', 'utf-8'));


const app = express();
app.disable('x-powered-by'); // para quitar la cabezera de express
app.use(json());

app.use('/lotes', lotesRouter);

// Forma global para trata el error de todas las request
app.use((req, res) => {
    res.status(404).send('404 Not Found')
});

const PORT = process.env.PORT || 1234;

app.listen(PORT, () => {
    console.log(`server listening on port http://localhost:${PORT}`)
});