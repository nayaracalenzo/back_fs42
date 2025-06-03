//busca todos os clientes
import { findAllClientes } from "../repositories/clienteRepository.js";

export async function getAllClientes(req, res) {
  try {
    const clientes = await findAllClientes();
    return res.json(clientes);
  } catch (error) {
    console.error("Erro ao buscar todos os clientes:", error);
    return res
      .status(500)
      .json({ message: "Erro ao buscar todos os clientes" });
  }
}

//buscar cliente pelo id
export async function getClienteById(req, res) {}

//cria um novo cliente
export async function createCliente(req, res) {}

//atualiza o cliente
export async function updateCliente(req, res) {}

//deleta o cliente
export async function deleteCliente(req, res) {}
