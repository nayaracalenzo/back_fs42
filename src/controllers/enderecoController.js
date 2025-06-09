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

//cria um novo endereço

//Edita o endereço

//deleta o endereço
