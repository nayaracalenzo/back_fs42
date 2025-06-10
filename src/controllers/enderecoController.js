import * as enderecoRepository from "../repositories/enderecoRepository.js";

//controlador que buscar todos os endereços
export async function getAllEnderecos(req, res) {
  try {
    const enderecos = await enderecoRepository.findAllEnderecos();

    return res.json(enderecos);
  } catch (error) {
    console.error("Erro ao buscar todos os endereços", error);
    return res
      .status(400)
      .json({ message: "Erro ao buscar todos os endereços" });
  }
}

//busca endereco por id
export async function getEnderecoById(req, res) {
  const { id } = req.params;

  try {
    const endereco = await enderecoRepository.findEnderecoById(id);

    if (!endereco) {
      return res.status(404).json({ message: "Endereço não encontrado." });
    }

    return res.json(endereco);
  } catch (error) {
    console.error("Erro ao buscar endereço:", error);
    return res.status(500).json({ message: "Erro ao buscar endereço." });
  }
}

//cria um novo endereço
export async function createEndereco(req, res) {
  const { cliente_id, rua, cidade, estado, cep } = req.body;

  try {
    const endereco = await enderecoRepository.createEndereco({
      cliente_id,
      rua,
      cidade,
      estado,
      cep,
    });
    return res.status(201).json(endereco);
  } catch (error) {
    console.error("Erro ao criar endereço:", error);
    return res.status(400).json({ message: "Erro ao criar endereço." });
  }
}

//Edita o ende
export async function updateEndereco(req, res) {
  const { id } = req.params;
  const { cliente_id, rua, cidade, estado, cep } = req.body;

  try {
    const endereco = await enderecoRepository.updateEndereco(id, {
      cliente_id,
      rua,
      cidade,
      estado,
      cep,
    });

    if (!endereco) {
      return res.status(404).json({ message: "Endereço não encontrado." });
    }

    return res.json(endereco);
  } catch (error) {
    console.error("Erro ao atualizar endereço:", error);
    return res.status(400).json({ message: "Erro ao atualizar endereço." });
  }
}

//deleta o endereço
export async function deleteEndereco(req, res) {
  const { id } = req.params;

  try {
    const endereco = await enderecoRepository.deleteEndereco(id);

    if (!endereco) {
      return res.status(404).json({ message: "Endereço não encontrado." });
    }

    return res.json({ message: "Endereço deletado com sucesso!" });
  } catch (error) {
    console.error("Erro ao deletar endereço:", error);
    return res.status(500).json({ message: "Erro ao deletar endereço." });
  }
}
