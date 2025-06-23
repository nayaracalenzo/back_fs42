import { Router } from "express";
import clienteRoutes from "./clienteRoutes.js";
import enderecoRoutes from "./enderecoRoutes.js";
import authRoutes from "./authRoutes.js";

const router = Router();

router.use("/auth", authRoutes);
router.use("/clientes", clienteRoutes);
router.use("/enderecos", enderecoRoutes);

export default router;
