import { set, sub } from "date-fns";

export const NOTIFICACOES_DEV = [
  {
    id: 1,
    titulo: "Your order is placed",
    descricao: "waiting for shipping",
    criadoEm: set(new Date(), { hours: 10, minutes: 30 }),
    isLido: true,
  },
  {
    id: 2,
    titulo: "Teste",
    descricao: "answered to your comment on the Minimal",
    criadoEm: sub(new Date(), { hours: 3, minutes: 30 }),
    isLido: true,
  },
  {
    id: 3,
    titulo: "You have new message",
    descricao: "5 unread messages",
    criadoEm: sub(new Date(), { days: 1, hours: 3, minutes: 30 }),
    isLido: false,
  },
  {
    id: 4,
    titulo: "You have new mail",
    descricao: "sent from Guido Padberg",
    criadoEm: sub(new Date(), { days: 2, hours: 3, minutes: 30 }),
    isLido: false,
  },
  {
    id: 5,
    titulo: "Delivery processing",
    descricao: "Your order is being shipped",
    criadoEm: sub(new Date(), { days: 3, hours: 3, minutes: 30 }),
    isLido: false,
  },
];
