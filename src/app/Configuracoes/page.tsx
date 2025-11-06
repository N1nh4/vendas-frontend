"use client";
import TituloPage from "@/components/TituloPage";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Edit, Trash } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import InputFormulario from "@/components/InputFormulario";
import { FormEvent, useState } from "react";
import { Produto } from "../types/produto";

export default function Configuracoes() {
  const produtos = [
    {
      id: 1,
      nome: "Produto A",
      sku: "SKU001",
      preco: 100.0,
      descricao: "celular 500 GB",
    },
    {
      id: 2,
      nome: "Produto B",
      sku: "SKU002",
      preco: 150.0,
      descricao: "notebook 1 TB",
    },
    {
      id: 3,
      nome: "Produto C",
      sku: "SKU003",
      preco: 200.0,
      descricao: "tablet 256 GB",
    },
    {
      id: 4,
      nome: "Produto D",
      sku: "SKU004",
      preco: 250.0,
      descricao: "smartwatch 128 GB",
    },
  ];

  const [sku, setSku] = useState("");
  const [preco, setPreco] = useState("");
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");

  // função para enviar os dados do formulario de produtos
  async function handleEnviar(e: FormEvent) {
    e.preventDefault();
    const produto: Produto = {
      sku,
      preco: parseFloat(preco),
      nome,
      descricao,
      dataCadastro: new Date().toISOString(),
    };
  }

  return (
    <div className="flex h-screen flex-col w-full">
      <TituloPage titulo="Configurações de Produtos" />
      <main className="justify-center m-10 grid grid-cols-3 gap-4">
        {produtos.map((produto) => (
          <Card key={produto.id} className="w-full">
            <CardHeader>
              <CardTitle>{produto.nome}</CardTitle>
              <CardDescription>{produto.descricao}</CardDescription>
              <CardAction>#{produto.sku}</CardAction>
            </CardHeader>
            <CardContent>
              <p>R$ {produto.preco}</p>
            </CardContent>
            <CardFooter className="gap-2">
              <Dialog>
                <DialogTrigger>
                  <button className="cursor-pointer border border-gray-300 p-2 rounded-md">
                    <Edit size={16} />
                  </button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Atualizar Produto</DialogTitle>
                    <DialogDescription>
                      <form action="" className="flex flex-col gap-4">
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
                          Atualizar
                        </button>
                      </form>
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
              <button className="cursor-pointer border border-gray-300 p-2 rounded-md">
                <Trash size={16} />
              </button>
            </CardFooter>
          </Card>
        ))}
      </main>
    </div>
  );
}
