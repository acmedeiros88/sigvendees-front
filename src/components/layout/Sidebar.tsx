import { useEffect } from "react";
import { useRouter } from "next/router";
// MUI CORE
import { Box, Divider, Drawer, Typography, useMediaQuery } from "@mui/material";
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

  const content = (
    <Box
      component="nav"
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <Box
        sx={{
          alignItems: "center",
          backgroundColor: "rgba(255, 255, 255, 0.04)",
          cursor: "default",
          display: "flex",
          px: 2,
          py: 2.2,
        }}
      >
        <Typography color="inherit" variant="subtitle1" px={2}>
          SIGVENDEES
        </Typography>
      </Box>

      <Divider sx={{ borderColor: "#2D3748" }} />

      <Box sx={{ flexGrow: 1, my: 3 }}>
        {ROTAS.map((rota, index) => (
          <NavItem
            key={index}
            icon={rota.icon}
            href={rota.href}
            title={rota.title}
          />
        ))}
      </Box>

      <Divider sx={{ borderColor: "#2D3748" }} />

      <Box sx={{ px: 2, py: 3, cursor: "default" }}>
        <Typography color="neutral.100" variant="subtitle2">
          footer
        </Typography>
      </Box>
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
            width: 250,
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
          width: 250,
        },
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
}
