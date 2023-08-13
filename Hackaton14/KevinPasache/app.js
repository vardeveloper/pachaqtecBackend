const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

/*
const server = http.createServer(app);
const io = socketIO(server);
*/

app.use(express.static(__dirname + "/public"));

io.on("connection", (socket) => {
  console.log("Un usuario se ha conectado", socket.id);

  socket.on("chat message", (msg) => {
    io.emit("chat message", msg);
  });

  socket.on("disconnect", () => {
    console.log("Usuario desconectado");
  });
});

http.listen(4000, () => {
  console.log('Servidor escuchando en http://localhost:4000');
});