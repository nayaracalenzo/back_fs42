//busca todos os clientes
import {
  findAllClientes,
  findClienteById,
} from "../repositories/clienteRepository.js";

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
export async function getClienteById(req, res) {
  const { id } = req.params;

  try {
    const cliente = await findClienteById(id);

    if (!cliente) {
      return res.status(404).json({ messagem: "Cliente não encontrado" });
    }

    return res.json(cliente);
  } catch (error) {
    console.error("Erro ao buscar o cliente:", error);
    res.status(500).json({ message: "Erro ao buscar o cliente" });
  }
}

//cria um novo cliente
export async function createCliente(req, res) {}

//atualiza o cliente
export async function updateCliente(req, res) {}

//deleta o cliente
export async function deleteCliente(req, res) {}
