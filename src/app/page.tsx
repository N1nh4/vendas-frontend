"use client";
import ConteudoPage from "@/components/ConteudoPage";
import InputFormulario from "@/components/InputFormulario";
import TituloPage from "@/components/TituloPage";
import { FormEvent, useState } from "react";
import { criarProduto } from "./services/produtoService";
import { ProdutoRequest } from "./types/produto";

export default function Home() {
  const [sku, setSku] = useState("");
  const [preco, setPreco] = useState("");
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");

  // função para enviar os dados do formulario de produtos
  async function handleEnviar(e: FormEvent) {
    e.preventDefault();
    const produto: ProdutoRequest = {
      sku,
      preco: parseFloat(preco),
      nome,
      descricao,
      dataCadastro: new Date().toISOString(),
    };

    await criarProduto(produto);

    setSku("");
    setPreco("");
    setNome("");
    setDescricao("");
  }

  return (
    <div className="flex h-screen flex-col w-full">
      <TituloPage titulo="Home" />
      <main className="flex justify-center">
        <ConteudoPage>
          <form action="" className="flex flex-col gap-4">
            <div>
              <h1 className="text-2xl">Cadastro de Produto</h1>
            </div>

            <div className="flex flex-row gap-1 w-full">
              <InputFormulario
                htmlFor="inputSKU"
                label="SKU: *"
                id="inputSKU"
                type="text"
                placeholder="Digite o SKU do produto"
                onChange={setSku}
                value={sku}
              />

              <div className="flex flex-col flex-1 gap-4">
                <InputFormulario
                  htmlFor="inputPreco"
                  label="Preço: *"
                  id="inputPreco"
                  type="number"
                  placeholder="Digite o preço do produto"
                  onChange={setPreco}
                  value={preco}
                />
              </div>
            </div>

            <InputFormulario
              htmlFor="inputNome"
              label="Nome: *"
              id="inputNome"
              type="text"
              placeholder="Digite o nome do produto"
              onChange={setNome}
              value={nome}
            />

            <label htmlFor="inputDescricao">Descrição: *</label>
            <textarea
              id="inputDescricao"
              placeholder="Digite o SKU do produto"
              className="p-2 border-gray-300 border text-black placeholder-gray-400 rounded-sm"
              onChange={(e) => setDescricao(e.target.value)}
              value={descricao}
            />
            <button
              className="bg-blue-500 rounded-sm text-white p-2 "
              type="button"
              onClick={handleEnviar}
            >
              Salvar
            </button>
          </form>
        </ConteudoPage>
      </main>
    </div>
  );
}
