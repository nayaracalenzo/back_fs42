import Cliente from "../models/clienteModel.js";

export async function findAllClientes() {
  return await Cliente.findAll();
}

export async function findClienteById(id) {
  return await Cliente.findByPk(id);
}
