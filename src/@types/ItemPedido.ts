import { Produto } from "./Produto";

export interface ItemPedido {
    id: number;
    quantidade: number;
    desconto: number;
    preco: number;
    produto: Produto;
}