import { getApiServerSide } from "./serverSideFetch";

// Utilizar para chamadas do lado do cliente.
export const { apiServerSide: apiClientSide } = getApiServerSide();