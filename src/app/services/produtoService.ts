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
import { Produto } from "../types/produto";
import { api } from "./api";

export async function criarProduto(produto: Produto) {
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
