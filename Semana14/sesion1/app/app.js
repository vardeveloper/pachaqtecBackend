const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static(__dirname + "/public"));

io.on('connection', (socket) => {
  console.log('Nuevo cliente conectado', socket.id);

  // Manejar el evento "mensaje" enviado por el cliente
  socket.on('mensaje', (mensaje) => {
    console.log(`Mensaje recibido: ${mensaje}`);
    
    // Enviar el mensaje a todos los clientes conectados
    io.emit('mensaje', `${socket.id.substr(0,2)} dice: ${mensaje}`);
  });

  // Manejar la desconexión del cliente
  socket.on('disconnect', () => {
    console.log('Cliente desconectado');
  });
});

server.listen(3000, () => {
  console.log('Servidor escuchando en http://localhost:3000');
});
