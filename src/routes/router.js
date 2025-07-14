import { Router } from "express";
import clienteRoutes from "./clienteRoutes.js";
import enderecoRoutes from "./enderecoRoutes.js";
import authRoutes from "./authRoutes.js";

const router = Router();

router.use("/auth",
  // #swagger.tags = ['autenticacao']
  authRoutes);
router.use("/clientes",
  // #swagger.tags = ['clientes']
  clienteRoutes);
router.use("/enderecos",
  // #swagger.tags = ['enderecos']
  enderecoRoutes);

export default router;
