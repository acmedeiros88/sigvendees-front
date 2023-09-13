import { Cidade } from "./Cidade";

export interface Estado {
    id: number;
    nome: string;
    cidades: Cidade[];
}