import { Entity, PrimaryColumn, Column, CreateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("users")
class User {
  @PrimaryColumn()
  id: string;

  @Column()
  email: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { User };

// Comamdos:
// Para criar a migration: yarn typeorm migration:create -n nome da tabela
// Para executar a migration: yarn typeorm migration:run
// Para executar a aplicação: yarn dev
// Biblioteca socket instalação:yarn add socket.io
// Tipagens do Socket io como dependência de desenvolvimento:
// yarn add @types/socket.io -D

/**
 * Exemplos de Rotas
 * patch: Para alterar uma informação específica


 app.get("/", (request, response) =>{
     return response.send("Olá NLW 05");
 })


 app.get("/", (request, response) => {
    return response.json({
       message: "Olá NLW 05!",
     })
}); 

app.post("/users", (request,response) =>{
    return response.json({
        message:"Usuário salvo com sucesso!",
   })
 });
 * 
 */
