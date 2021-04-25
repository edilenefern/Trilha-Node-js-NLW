import { Router } from "express";
import { SettingsController } from "./controllers/SettingsController";
import { UsersController } from "./controllers/UsersController";


const routes = Router();



const settingsController = new SettingsController();
const usersController = new UsersController();


 routes.post("/settings", settingsController.create);
 routes.post("/users" , usersController.create);

export { routes };

/**
 * Tipos de parametros
 * Routes Params => parametros de rotas
 * http://localhost:3333/settings/1
 * Query Params => Filtros e buscas 
 * htpp://localhost:3333/settings/1?/search=algumacoisa
 * 
 * Body params => {
 * }
 */