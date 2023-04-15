import { useEffect } from "react";
import { useRouter } from "next/router";
// MATERIAL UI
import { Box, Divider, List, Drawer, Typography, SxProps, Theme, useMediaQuery } from "@mui/material";
// COMPONENTS
import NavItem from "./NavItem";
import ROTAS from "../../Rotas";

interface SidebarProps {
  open: boolean;
  onClose(): void;
}

export default function Sidebar(props: SidebarProps) {
  const router = useRouter();

  const lgUp = useMediaQuery((theme: any) => theme.breakpoints.up("lg"), {
    defaultMatches: true,
    noSsr: false,
  });

  useEffect(
    () => {
      if (!router.isReady) {
        return;
      }

      if (props.open) {
        props.onClose?.();
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [router.asPath]
  );

  const styleSiderbar: SxProps<Theme> | any = {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    overflow: "auto",
    scrollbarWidth: 'thin',
    "&::-webkit-scrollbar": {
      width: "0.5em",
      backgroundColor: "#2A3F54",
    },
    "&::-webkit-scrollbar-thumb": {
      borderRadius: 8,
    },
    "&::-webkit-scrollbar-thumb:focus": {
      backgroundColor: "#9DA4AE",
    },
    "&::-webkit-scrollbar-thumb:active": {
      backgroundColor: "#9DA4AE",
    },
    "&::-webkit-scrollbar-thumb:hover": {
      backgroundColor: "#9DA4AE",
    },
    "&::-webkit-scrollbar-corner": {
      backgroundColor: "transparent",
    },
  };

  const content = (
    <Box component="nav" sx={styleSiderbar}>

      <Box
        sx={{
          //alignItems: "center",
          backgroundColor: "rgba(255, 255, 255, 0.04)",
          cursor: "default",
          //display: "flex",
          px: 2.5,
          py: 2.2,
        }}
      >
        <Typography color="inherit" variant="subtitle1">
          SIGVENDEES
        </Typography>
      </Box>

      <Divider sx={{ borderColor: "#2D3748" }} />

      {/* <Box sx={{ flexGrow: 1, my: 3 }}> */}
      <List sx={{ width: "100%" }}>
        {ROTAS.map((rota, index) => (
          <NavItem
            key={index}
            icon={rota.icon}
            href={rota.href}
            title={rota.title}
          />
        ))}
      </List>

      {/* <Box sx={{ py: 2.2, cursor: "default" }}>
        <Typography color="neutral.500" variant="body2">
          &copy;acmedeiros
        </Typography>
      </Box> */}
    </Box>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: "neutral.900",
            color: "#FFFFFF",
            width: 260,
          },
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={props.onClose}
      open={props.open}
      PaperProps={{
        sx: {
          backgroundColor: "neutral.900",
          color: "#FFFFFF",
          width: 260,
        },
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
}
