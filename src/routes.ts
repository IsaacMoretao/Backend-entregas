import { Router } from "express";
import { CreateClientController } from "./modules/clients/useCases/createClient/createClientController";
import { AutenticateClientController } from "./modules/account/autenticateClient/AutenticateClientController";
import { CreateDeliverymanController } from "./modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController"
import { AuthenticateDelivermanController } from "./modules/account/autenticateDeliveryman/AuthenticateDeliverimanController"

const routes = Router();

const createClientController = new CreateClientController();
const autenticateClientController = new AutenticateClientController();
const createDeliverymanController = new CreateDeliverymanController();
const authenticateDelivermanController = new AuthenticateDelivermanController();

routes.post("/client/authenticate", autenticateClientController.handle);
routes.post("/deliveryman/authenticate", authenticateDelivermanController.handle);

routes.post("/client/", createClientController.handle);
routes.post("/deliveryman", createDeliverymanController.handle)

export { routes };