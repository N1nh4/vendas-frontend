// import { Produto } from "../types/produto";

// async function criarProduto(produto: Produto) {
//   const response = await fetch("http://localhost:8080/api/produtos", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(produto),
//   });

//   return response.json();
// }

import { Produto } from "../types/produto";
import { api } from "./api";

export async function criarProduto(produto: Produto) {
  const response = await api.post("/api/produtos", produto);
  return response.data;
}
