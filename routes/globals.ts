import { Router } from "express";
import { GlobalsController } from "../controllers/GlobalsController";

// Initialiastion du hubRouter Express
const globalRouter = Router();

// Déclaration de la route 'homepage'
globalRouter.get("/", (request, response) => {
    const controller = new GlobalsController(request, response);
    controller.homepage();
});

// Déclaration de la route 'liste'
globalRouter.get("/liste", (request,response) => {
    const controller = new GlobalsController(request,response);
    controller.liste();
});

// Déclaration de la route 'detail'
globalRouter.get("/detail", (request, response) => {
    const controller = new GlobalsController(request, response);
    controller.detail();
});

// Déclaration de la route 'formulaire'
globalRouter.get("/formulaire", (request, response) => {
    const controller = new GlobalsController(request, response);
    controller.formulaire();
});

// Déclaration de la route 'suppression'
globalRouter.get("/suppression", (request, response) => {
    const controller = new GlobalsController(request, response);
    controller.suppression();
});

export default globalRouter;