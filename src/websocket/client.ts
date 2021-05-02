import { io } from "../http";

io.on("connect", (socket) => {
    socket.on("client_first_acess", (params) =>{
        console.log(params)
    });
    
});