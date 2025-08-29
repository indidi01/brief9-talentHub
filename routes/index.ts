import { Router } from "express";
import globalRouter from "./globals";

// Initialiastion du router Express
const router = Router();

// On lie le router "globals" au router principale
router.use(globalRouter);

// On lie le router spécial "hub" au router principale


export default router;