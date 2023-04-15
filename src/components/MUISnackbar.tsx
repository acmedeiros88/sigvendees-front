// MATERIAL UI
import { Alert, Snackbar } from "@mui/material";

interface MUISnackbarProps {
  open: boolean;
  setOpen(value: boolean): void;
  tipoAlert: "success" | "info" | "warning" | "error";
  mensagem: string;
}

export default function MUISnackbar(props: MUISnackbarProps) {
  const { open, setOpen, tipoAlert, mensagem } = props;
  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={() => setOpen(false)}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Alert
        onClose={() => setOpen(false)}
        severity={tipoAlert}
        sx={{ width: "100%" }}
      >
        {mensagem}
      </Alert>
    </Snackbar>
  );
}
