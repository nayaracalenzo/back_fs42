import { Router } from "express";
import * as authController from "../controllers/authController.js";
import { verificarEmailExiste } from "../middleware/verificarEmailExiste.js";

const router = Router();

router.post("/register",
  // #swagger.summary = rota de cadastro de usuário
  // #swagger.description = cadastra um usuário com nome, email e senha
  /* #swagger.responses[201] = {
    description: 'Usuário criado com sucesso',
    content: {
      "application/json": {
        example: {
          nome: 'Adalto',
          email: 'adalto@exemplo.com',
          senha: '****'
        }
      }
    }
  } 
  */
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
