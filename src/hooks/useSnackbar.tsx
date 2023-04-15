import { useState } from "react";

export default function useSnackbar() {
  const [openSnackbar, setOpenSnackbar] = useState<boolean>(false);
  const [tipoSnackbar, setTipoSnackbar] = useState<"success" | "info" | "warning" | "error">("success");
  const [mensagemSnackbar, setMensagemSnackbar] = useState<string>("");

  return {
    openSnackbar,
    setOpenSnackbar,
    tipoSnackbar,
    setTipoSnackbar,
    mensagemSnackbar,
    setMensagemSnackbar,
  };
}
