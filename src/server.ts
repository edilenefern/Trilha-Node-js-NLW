import express, { request, response } from "express";


import "./database";

import { routes } from "./routes";

const app = express();

app.use(express.json());

app.use(routes);

// patch: Para alterar uma informação específica


// app.get("/", (request, response) =>{
//     return response.send("Olá NLW 05");
// })


// app.get("/", (request, response) => {
//     return response.json({
//         message: "Olá NLW 05!",
//     })
// }); 

// app.post("/users", (request,response) =>{
//     return response.json({
//         message:"Usuário salvo com sucesso!",
//     })
// });
app.listen(3333, () => console.log(`Server is running on port:http://localhost:3333`));

