import axios from "axios";
import { parseCookies } from "nookies";

// Utilizar para chamadas do lado do servidor.
export function getApiServerSide(ctx?: any) {
  const { "rastreiotoken": token } = parseCookies(ctx);

  const apiServerSide = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL_API,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  if (token) {
    apiServerSide.defaults.headers["Authorization"] = `Bearer ${token}`;
  }

  return { apiServerSide };

}