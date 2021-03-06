require("dotenv").config();

var server = require("express")();
var http = require("http").Server(server);
var io = require("socket.io")(http);

const dev = process.env.NODE_ENV !== "production";
const next = require("next");
const app = next({
  dev,
  dir: "./"
});
const bodyParser = require("body-parser");
const video = require("./api/video");
var cors = require("cors");

const handle = app.getRequestHandler();

const PORT = process.env.PORT || 5000;
const IS_CLEVER = process.env.IS_CLEVER;

if (IS_CLEVER) {
  var enforce = require("express-sslify");
}

let nbSession = 0;

io.on("connection", function(socket) {
  socket.on("join", function(data) {
    const username = data.username;
    socket.join(data.roomId);
    socket.room = data.roomId;
    const sockets = io.of("/").in().adapter.rooms[data.roomId];

    nbSession = sockets.length;
    if (sockets.length === 1) {
      socket.emit("init");
    } else {
      if (sockets.length < 5) {
        io.to(data.roomId).emit("ready", { username: username });
      } else {
        socket.room = null;
        socket.leave(data.roomId);
        socket.emit("full");
      }
    }
  });
  socket.on("signal", data => {
    io.to(data.room).emit("desc", data);
  });
  socket.on("messageSignal", data => {
    io.to(data.room).emit("messageReceived", data);
  });
  socket.on("disconnect", () => {
    const roomId = Object.keys(socket.adapter.rooms)[0];
    if (socket.room) {
      io.to(socket.room).emit("disconnected");
    }
  });
});
app.prepare().then(() => {
  server.use(bodyParser.urlencoded({ extended: false }));
  server.use(bodyParser.json());
  server.use(video);

  // handling everything else with Next.js
  server.get("*", handle);

  server.use(cors());

  if (IS_CLEVER) {
    server.use(enforce.HTTPS({ trustProtoHeader: true }));
    http.listen(PORT, "0.0.0.0", () => {
      console.log(`listening on port ${PORT}`);
    });
  } else {
    http.listen(PORT, "localhost", () => {
      console.log(`listening on port ${PORT}`);
    });
  }
});
