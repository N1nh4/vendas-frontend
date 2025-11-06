// import { Produto } from "../types/produto";

// async function criarProduto(produto: Produto) {
//   const response = await fetch("http://localhost:8080/api/produtos", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(produto),
//   });

//   return response.json();
// }

import { toast } from "sonner";
import { api } from "./api";
import { ProdutoRequest } from "../types/produto";

async function criarProduto(produto: ProdutoRequest) {
  try {
    const response = await api.post("/api/produtos", produto);
    toast.success(
      "Produto " + `"` + produto.nome + `"` + " cadastrado com sucesso!"
    );
    return response.data;
  } catch (error) {
    toast.error("Erro ao criar o produto.");
    throw error;
  }
}

// async function visualizarTodosProdutos() {
//   const response = await fetch("http://localhost:8080/api/produtos", {
//     method: "GET",
//     headers: { "Content-Type": "application/JSON" },
//   });
//   return response.json();
// }

async function visualizarProduto() {
  try {
    const response = await api.get("/api/produtos");
    return response.data;
  } catch (error) {
    toast.error("Erro ao visualizar o produto.");
    throw error;
  }
}

// async function atualizarProduto(id: number, produto: ProdutoRequest) {
//   const response = await fetch(`http://localhost:8080/api/produtos/${id}`, {
//     method: "PUT",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(produto),
//   });
//   return response.json();
// }

async function atualizarProduto(id: number, produto: ProdutoRequest) {
  try {
    const response = await api.put(`/api/produtos/${id}`, produto);
    toast.success(produto.nome + " atualizado com sucesso!");
    return response.data;
  } catch (error) {
    toast.error("Erro ao atualizar o produto.");
  }
}

export { criarProduto, visualizarProduto, atualizarProduto };
