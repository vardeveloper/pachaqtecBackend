import { Router } from "express";
import { LoteController } from "../controllers/loteControl.js";

export const lotesRouter = Router(); //exportando

lotesRouter.get('/', LoteController.getAll);
lotesRouter.get('/:id', LoteController.getById);
lotesRouter.post('/', LoteController.create);
lotesRouter.patch('/:id', LoteController.update); // tambien se puede usar como PUT si le brindas los parametros completos
lotesRouter.delete('/:id', LoteController.delete);