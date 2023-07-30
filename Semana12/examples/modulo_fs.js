const fs = require('fs');

// Leemos el contenido de un archivo de texto llamado 'archivo.txt'
fs.readFile('archivo.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error al leer el archivo:', err);
  } else {
    console.log('Contenido del archivo:', data);
  }
});

// Creamos o sobrescribimos el contenido de un archivo llamado 'archivo.txt'
/*const contenido = 'Hola, este es el contenido que se escribirá en el archivo.';
fs.writeFile('archivo1.txt', contenido, (err) => {
  if (err) {
    console.error('Error al escribir en el archivo:', err);
  } else {
    console.log('Se escribió el contenido en el archivo.');
  }
});*/

// Agregamos contenido a un archivo llamado 'archivo.txt' sin borrar el contenido previo
const contenido = '\nEste contenido se agrega al final del archivo.';
fs.appendFile('archivo.txt', contenido, (err) => {
  if (err) {
    console.error('Error al agregar contenido al archivo:', err);
  } else {
    console.log('Se agregó el contenido al archivo.');
  }
});