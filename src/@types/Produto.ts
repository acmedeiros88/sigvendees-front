import { Categoria } from "./enums/Categoria";

export interface Produto {
    id: number;
    nome: string;
    preco: number;
    categoria: Categoria;
}