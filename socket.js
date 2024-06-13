import { Server } from "socket.io";
import { createServer } from "http";
import express from "express";

const app = express();

const server = createServer(app);
const io = new Server(server);

io.on("connection", (socket) => {
    console.log(`User connected from - ${socket.id}`);
    socket.on("disconnect", () => {
        console.log(`User disconnected from - ${socket.id} `);
    });
});

server.listen(2000, async () => {
    console.log(`Server listening on PORT - 2000`);
});
