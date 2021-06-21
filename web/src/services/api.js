import { create } from 'apisauce'

export const restApi = create({
  baseURL: "http://localhost:3030",
});

const api = () => {
  return {
    findVeiculos: (page) => findVeiculos(page),
    deleteVeiculo: (id) => deleteVeiculo(id),
    createVeiculo: (obj) => createVeiculo(obj),
    editVeiculo: (id, obj) => editVeiculo(id, obj),
    getVeiculo: (id) => getVeiculo(id),
    getDetalhesUltimaSemana: (page) => getDetalhesUltimaSemana(page),
    getDetalhesNaoVendidos: (page) => getDetalhesNaoVendidos(page),
    getDetalhesPorDecada: () => getDetalhesPorDecada(),
    getDetalhesPorMarca: () => getDetalhesPorMarca(),
  }
}


async function getDetalhesUltimaSemana(page) {
  return await restApi.get(`/detalhes`, { $skip: 10 * (page - 1), type: "ULTIMA_SEMANA" });
}

async function getDetalhesNaoVendidos(page) {
  return await restApi.get(`/detalhes`, { $skip: 10 * (page - 1), type: "NAO_VENDIDOS" });
}

async function getDetalhesPorDecada() {
  return await restApi.get(`/detalhes`, { type: "POR_DECADA" });
}

async function getDetalhesPorMarca() {
  return await restApi.get(`/detalhes`, { type: "POR_MARCA" });
}

async function deleteVeiculo(id) {
  return await restApi.delete(`/veiculos/${id}`);
}

async function createVeiculo(obj) {
  return await restApi.post(`/veiculos`, obj);
}

async function editVeiculo(id, obj) {
  return await restApi.patch(`/veiculos/${id}`, obj);
}

async function findVeiculos(page) {
  return await restApi.get("/veiculos", { $skip: 10 * (page - 1) });
}

async function getVeiculo(id) {
  return await restApi.get("/veiculos", { id });
}

export default api();