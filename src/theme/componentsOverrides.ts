import { Components, Theme } from "@mui/material";

const componentsOverrides: Components<Omit<Theme, "components">> = {
  MuiButton: {
    defaultProps: {
      disableElevation: true,
    },
    styleOverrides: {
      root: {
        textTransform: "none",
      },
      sizeSmall: {
        padding: "6px 16px",
      },
      sizeMedium: {
        padding: "8px 20px",
      },
      sizeLarge: {
        padding: "11px 24px",
      },
      textSizeSmall: {
        padding: "7px 12px",
      },
      textSizeMedium: {
        padding: "9px 16px",
      },
      textSizeLarge: {
        padding: "12px 16px",
      },
    },
  },
  MuiButtonBase: {
    defaultProps: {
      disableRipple: true,
    },
  },
  MuiCardContent: {
    styleOverrides: {
      root: {
        padding: "32px 24px",
        "&:last-child": {
          paddingBottom: "32px",
        },
      },
    },
  },
  MuiCardHeader: {
    defaultProps: {
      titleTypographyProps: {
        variant: "h6",
      },
      subheaderTypographyProps: {
        variant: "body2",
      },
    },
    styleOverrides: {
      root: {
        padding: "32px 24px",
      },
    },
  },
  MuiCssBaseline: {
    styleOverrides: {
      "*": {
        boxSizing: "border-box",
        margin: 0,
        padding: 0,
      },
      html: {
        MozOsxFontSmoothing: "grayscale",
        WebkitFontSmoothing: "antialiased",
        display: "flex",
        flexDirection: "column",
        minHeight: "100%",
        width: "100%",
      },
      body: {
        display: "flex",
        flex: "1 1 auto",
        flexDirection: "column",
        minHeight: "100%",
        width: "100%",
      },
      "#__next": {
        display: "flex",
        flex: "1 1 auto",
        flexDirection: "column",
        height: "100%",
        width: "100%",
      },
      a: {
        color: "inherit",
        textDecoration: "none",
      },
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      notchedOutline: {
        borderColor: "#E6E8F0",
      },
    },
  },
  MuiTableHead: {
    styleOverrides: {
      root: {
        backgroundColor: "#F3F4F6",
        ".MuiTableCell-root": {
          color: "#374151",
        },
        borderBottom: "none",
        "& .MuiTableCell-root": {
          borderBottom: "none",
          fontSize: "12px",
          fontWeight: 600,
          lineHeight: 1,
          letterSpacing: 0.5,
          textTransform: "uppercase",
        },
        "& .MuiTableCell-paddingCheckbox": {
          paddingTop: 4,
          paddingBottom: 4,
        },
      },
    },
  },
  MuiTabs: {
    styleOverrides: {
      root: {
        "& .MuiTabs-indicator": {
          backgroundColor: "#10B981",
        },
      },
    },
  },
  MuiTab: {
    styleOverrides: {
      root: {
        color: "#6B7280",
        "&.Mui-selected": {
          color: "#10B981",
          fontWeight: "700",
        },
        //  '&:hover': {
        //    color: 'rgba(255,255,255, 0.08)',
        //  },
      },
    },
  },
};

export default componentsOverrides;
