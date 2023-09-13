import { TipoTelefone } from "./enums/TipoTelefone";

export interface Telefone {
    id: number;
    numero: string;
    tipo: TipoTelefone;
}