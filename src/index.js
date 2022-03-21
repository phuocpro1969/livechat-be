const express = require("express");
const http = require("http");
const socket = require("socket.io");
require("dotenv").config();

const app = express();

const server = http.createServer(app);
global.io = socket(server, {
	cors: {
		origin: "http://localhost:3000",
		methods: ["GET", "POST"],
	},
});

const port = process.env.PORT | 8080;

server.listen(port, () => {
	console.log("http://localhost:" + port);
});
