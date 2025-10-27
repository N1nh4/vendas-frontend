"use client";
import ConteudoPage from "@/components/ConteudoPage";
import TituloPage from "@/components/TituloPage"
import { FormEvent, useState } from "react";

export default function Home() {
  const [sku, setSku] = useState("");
  const [preco, setPreco] = useState("");
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");

  function handleEnviar(e: FormEvent) {
    e.preventDefault()
    const produto = {
      sku,
      preco,
      nome,
      descricao
    }
    setSku("");
    setPreco("");
    setNome("");
    setDescricao("");
    console.log(produto);
  }

  return (
    <div className="flex h-screen flex-col w-full">
      <TituloPage titulo="Home"/>
      <main className="flex justify-center">
        <ConteudoPage> 
          <form action="" className="flex flex-col gap-4">
            <div>
              <h1 className="text-2xl">Cadastro de Produto</h1>
            </div>
      
            <div className="flex flex-row gap-1 w-full">
              <div className="flex flex-col flex-1 gap-4">
                <label htmlFor="inputSKU">SKU: *</label>
                <input
                  id="inputSKU"
                  type="text"
                  placeholder="Digite o SKU do produto"
                  className="p-2 border-gray-300 border text-gray-400 rounded-sm"
                  onChange={e => setSku(e.target.value)}
                  value={sku}

                />
              </div>
              <div className="flex flex-col flex-1 gap-4">
                <label htmlFor="inputPreco">Preço: *</label>
                <input
                  id="inputPreco"
                  type="number"
                  placeholder="Digite o SKU do produto"
                  className="p-2 border-gray-300 border text-gray-400 rounded-sm"
                  onChange={e => setPreco(e.target.value)}
                  value={preco}
                
                />
              </div>
            </div>

            <label htmlFor="inputNome">Nome: *</label>
            <input 
              id="inputNome" 
              type="text" 
              placeholder="Digite o SKU do produto"
              className="p-2 border-gray-300 border text-gray-400 rounded-sm"
              onChange={e => setNome(e.target.value)}
              value={nome}
            
            />

            <label htmlFor="inputDescricao">Descrição: *</label>
            <textarea
              id="inputDescricao" 
              placeholder="Digite o SKU do produto"
              className="p-2 border-gray-300 border text-gray-400 rounded-sm"
              onChange={e => setDescricao(e.target.value)}
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
