import { Router } from "express";
import { CreateClientController } from "./modules/clients/useCases/createClient/createClientController";
import { AutenticateClientController } from './modules/account/autenticateClient/AutenticateClientController';

const routes = Router();

const createClientController = new CreateClientController();
const autenticateClientController = new AutenticateClientController();

routes.post("/authenticate", autenticateClientController.handle);

routes.post("/client/", createClientController.handle);

export { routes };