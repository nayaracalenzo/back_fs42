import { Router } from "express";
import * as clienteController from "../controllers/clienteController.js";

const router = Router();

//rotas de clientes
router.get("/",
  // #swagger.description = Retorna os dados de todos os clientes
  clienteController.getAllClientes);
router.get("/:id",
  // #swagger.description = Retorna os dados de um cliente específico pelo ID.
  clienteController.getClienteById);
router.post("/", clienteController.createCliente);
router.put("/:id", clienteController.updateCliente);
router.delete("/:id", clienteController.deleteCliente);

export default router;
