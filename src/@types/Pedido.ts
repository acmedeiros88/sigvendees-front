import { Cliente } from "./Cliente";
import { Endereco } from "./Endereco";
import { ItemPedido } from "./ItemPedido";
import { Pagamento } from "./Pagamento";

export interface Pedido {
    id: number;
    pagamento: Pagamento;
    cliente: Cliente;
    enderecoEntrega: Endereco;
    itens: ItemPedido[];
}