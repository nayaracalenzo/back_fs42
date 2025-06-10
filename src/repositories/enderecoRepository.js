import Cliente from "../models/clienteModel.js";
import Endereco from "../models/enderecoModel.js";

export async function findAllEnderecos() {
  return await Endereco.findAll({
    include: {
      model: Cliente,
      as: "cliente",
    },
  });
}

export async function findEnderecoById(id) {
  return await Endereco.findByPk(id, {
    include: {
      model: Cliente,
      as: "cliente",
    },
  });
}
