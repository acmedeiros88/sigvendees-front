// MATERIAL UI
import { Typography, Stack } from "@mui/material";

export default function AuthFooter() {
  return (
    <Stack direction="row" justifyContent="start">
      <Typography
        variant="subtitle2"
        color="rgb(105, 117, 134)"
        fontSize="0.75rem"
      >
        Todos os direitos reservados.
      </Typography>
    </Stack>
  );
}
