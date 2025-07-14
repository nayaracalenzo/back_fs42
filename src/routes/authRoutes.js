import { Router } from "express";
import * as authController from "../controllers/authController.js";
import { verificarEmailExiste } from "../middleware/verificarEmailExiste.js";

const router = Router();

router.post("/register",
  // #swagger.summary = rota de cadastro de usuário
  verificarEmailExiste, authController.register);
router.post("/login",
  // #swagger.summary = rota de login de usuário
  authController.login);
router.post("/logout",
  // #swagger.summary = rota de logout de usuário
  authController.logout);
router.get("/perfil",
  // #swagger.summary = rota de perfil do usuário
  authController.perfil);

export default router;
