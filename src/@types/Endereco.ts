import { Cidade } from "./Cidade";
import { TipoEndereco } from "./enums/TipoEndereco";

export interface Endereco {
    id: number;
    logradouro: string;
    numero: string;
    bairro: string;
    complemento: string;
    cep: number;
    cidade: Cidade;
    tipo: TipoEndereco;
}