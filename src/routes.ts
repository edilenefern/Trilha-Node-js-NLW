import { Router } from "express";
import { SettingsController } from "./controllers/SettingsController";


const routes = Router();



const settingsController = new SettingsController();

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

 routes.post("/settings", settingsController.create);

export { routes };
