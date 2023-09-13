import { Endereco } from "./Endereco";
import { Telefone } from "./Telefone";

export interface Cliente {
    id: number;
    nome: string;
    email: string;
    cpfCnpj: string;
    observacao: string;
    telefones: Telefone[];
    enderecos: Endereco[];
}