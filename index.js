const express = require("express");
const cors = require("cors");
const http = require("http");            // Import http
const { Server } = require("socket.io");

const app = express();

app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST"],
  credentials: true,
}));

app.get("/", (req, res) => {
  res.send("We are not live");
});

app.get("/shit", (req, res) => {
  res.json({
    name: "ankit chauhan",
    package: "25lpa"
  });
});

// Create HTTP server from express app
const server = http.createServer(app);

// Create socket.io server attached to HTTP server
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true
  }
});

io.on("connection", (socket) => {
  console.log("User connected", socket.id);
  socket.emit("hello", { message: "hi ankit" });
});

// Listen on one server
server.listen(3000, () => {
  console.log("Server listening on port 3000");
});
