import express  from "express";
import { createServer } from "http";
import { Server, Socket } from "socket.io";

import "./database";
import { routes } from "./routes";

const app = express();

const http = createServer(app); //Criando protocolo http
const io = new Server(http); //Criando protocolo ws

io.on("connection",(socket: Socket) =>{
    console.log("Se conectou", socket.id);
});

app.use(express.json());

app.use(routes);

http.listen(3333, () => console.log(`Server is running on port:http://localhost:3333`));


// app.listen(3333, () => console.log(`Server is running on port:http://localhost:3333`));

