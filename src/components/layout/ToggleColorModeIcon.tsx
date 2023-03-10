import { usePageContext } from "../../pages/_app";
// ICONS
import { IconButton, Tooltip, useTheme } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

export default function ToggleColorModeIcon() {
  const theme = useTheme();

  return (
    <Tooltip title={"Modo " + theme.palette.mode}>
      <IconButton
        color="default"
        onClick={usePageContext().toggleColorMode}
        sx={{ width: 40, height: 40 }}
      >
        {theme.palette.mode === "dark" ? (
          <Brightness7Icon fontSize="small" />
        ) : (
          <Brightness4Icon fontSize="small" />
        )}
      </IconButton>
    </Tooltip>
  );
}
