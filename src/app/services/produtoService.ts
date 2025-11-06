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

export { criarProduto, visualizarProduto };
