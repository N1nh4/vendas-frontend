interface ProdutoRequest {
  sku: string;
  nome: string;
  preco: number;
  descricao: string;
  dataCadastro: string;
}

interface ProdutoResponse {
  id: number;
  sku: string;
  nome: string;
  preco: number;
  descricao: string;
  dataCadastro: string;
}

export type { ProdutoRequest, ProdutoResponse };
