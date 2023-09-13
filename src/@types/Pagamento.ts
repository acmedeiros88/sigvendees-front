import { Pedido } from "./Pedido";
import { SituacaoPagamento } from "./enums/SituacaoPagamento";

export interface Pagamento {
    id: number;
    situacao: SituacaoPagamento;
    pedido: Pedido;
}