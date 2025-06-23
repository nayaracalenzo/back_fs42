import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import * as authRepository from "../repositories/authRepository.js";

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN;

//controller para registrar usuario
export async function register(req, res) {
  const { nome, email, senha } = req.body;

  try {
    const senhaHash = await bcrypt.hash(senha, 10);
    await authRepository.createUser({ nome, email, senhaHash });

    res.status(201).json({ message: "Usuário criado com sucesso" });
  } catch (error) {
    console.error("Erro ao criar o usuário", error);
    res.status(400).json({ message: "Erro ao criar o usuário" });
  }
}

//controller de login do usuário
export async function login(req, res) {
  const { email, senha } = req.body;

  try {
    const usuario = await authRepository.findUserByEmail(email);

    if (!usuario) {
      return res.status(401).json({ message: "Usuário não encontrado" });
    }

    const senhaValida = await bcrypt.compare(senha, usuario.senha);

    if (!senhaValida) {
      return res.status(401).json({ message: "Senha inválida" });
    }

    const token = jwt.sign({ id: usuario.id, nome: usuario.nome }, JWT_SECRET, {
      expiresIn: JWT_EXPIRES_IN,
    });
  } catch (error) {
    console.error("Erro ao fazer o login", error);
    res.status(400).json({ message: "Erro ao fazer o login" });
  }
}
