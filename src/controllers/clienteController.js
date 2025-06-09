import * as clienteRepository from "../repositories/clienteRepository.js";

export async function getAllClientes(req, res) {
  try {
    const clientes = await clienteRepository.findAllClientes();
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
    const cliente = await clienteRepository.findClienteById(id);

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
export async function createCliente(req, res) {
  const { nome, email, telefone } = req.body;

  try {
    const cliente = await clienteRepository.createCliente({
      nome,
      email,
      telefone,
    });

    return res
      .status(201)
      .json({ message: "Cliente criado com sucesso.", data: cliente });
  } catch (error) {
    console.error("Erro ao criar o cliente", error);
    return res.status(400).json({ message: "Erro ao criar o cliente" });
  }
}

//atualiza o cliente
export async function updateCliente(req, res) {
  const { id } = req.params;
  const { nome, email, telefone } = req.body;

  try {
    const cliente = await clienteRepository.updateCliente(id, {
      nome,
      email,
      telefone,
    });

    if (!cliente) {
      return res.status(404).json({ message: "Cliente não encontrado" });
    }

    return res.json({
      message: "Cliente atualizado com sucesso",
      data: cliente,
    });
  } catch (error) {
    console.error("Erro ao atualizar o cliente", error);
    return res.status(400).json({ message: "Erro ao atualizar o cliente" });
  }
}

//deleta o cliente
export async function deleteCliente(req, res) {
  const { id } = req.params;

  try {
    const cliente = await clienteRepository.deleteCliente(id);

    if (!cliente) {
      return res.status(404).json({ message: "Cliente não encontrado" });
    }

    return res.json({ message: "Cliente deletado com sucesso", data: cliente });
  } catch (error) {
    console.error("Erro ao deletar o cliente", error);
    return res.status(500).json({ message: "Erro ao deletar o cliente" });
  }
}
