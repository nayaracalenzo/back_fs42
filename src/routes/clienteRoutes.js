import { Router } from "express";
import {
  getAllClientes,
  getClienteById,
  createCliente,
  updateCliente,
  deleteCliente,
} from "../controllers/clienteController.js";

const router = Router();

//rotas de clientes
router.get("/", getAllClientes);
router.get("/:id", getClienteById);
router.post("/", createCliente); //falta esse 09/06/25
router.put("/:id", updateCliente); //falta esse
router.delete("/:id", deleteCliente); //falta esse

export default router;
