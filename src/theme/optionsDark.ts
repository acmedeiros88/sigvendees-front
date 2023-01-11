import { ThemeOptions } from "@mui/material/styles";
import componentsOverrides from "./componentsOverrides";
import customShadows from "./customShadows";
import customTypography from "./customTypography";
import customBreakpoints from "./customBreakpoints";

declare module "@mui/material/styles" {
  interface Palette {
    neutral: Palette["grey"];
  }

  interface PaletteOptions {
    neutral?: PaletteOptions["grey"];
  }
}

export const darkOptions: ThemeOptions = {
  palette: {
    mode: "dark",
    neutral: {
      100: "#F3F4F6",
      200: "#E5E7EB",
      300: "#D1D5DB",
      400: "#9CA3AF",
      500: "#6B7280",
      600: "#4B5563",
      700: "#374151",
      800: "#1F2937",
      900: "#111827",
    },
    primary: {
      main: "#5048E5",
      light: "#828DF8",
      dark: "#3832A0",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#10B981",
      light: "#3FC79A",
      dark: "#0B815A",
      contrastText: "#FFFFFF",
    },
  },
  shape: {
    borderRadius: 8,
  },
  breakpoints: customBreakpoints,
  components: componentsOverrides,
  shadows: customShadows,
  typography: customTypography,
};
