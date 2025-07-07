import { Router } from "express";
import * as authController from "../controllers/authController.js";
import { verificarEmailExiste } from "../middleware/verificarEmailExiste.js";

const router = Router();

router.post("/register", verificarEmailExiste, authController.register);
router.post("/login", authController.login);
router.post("/logout", authController.logout);
router.get("/perfil", authController.perfil);

export default router;
