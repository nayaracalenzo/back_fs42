import { Router } from "express";
import getAllClientes from "../controllers/clienteController.js";

const router = Router();

//rotas de clientes
router.get("/", getAllClientes);
router.get("/:id");
router.post("/");
router.put("/:id");
router.delete("/:id");
