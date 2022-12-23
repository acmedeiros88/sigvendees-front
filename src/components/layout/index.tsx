import { useState } from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import NavbarHeader from "./NavbarHeader";
import Sidebar from "./Sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

const LayoutRoot = styled("div")(({ theme }: any) => ({
  display: "flex",
  flex: "1 1 auto",
  maxWidth: "100%",
  paddingTop: 30,
  [theme.breakpoints.up("lg")]: { paddingLeft: 250 },
}));

export default function Layout(props: LayoutProps) {
  const [isSidebarOpen, setSidebarOpen] = useState<boolean>(true);

  return (
    <LayoutRoot>
      <NavbarHeader onSidebarOpen={() => setSidebarOpen(true)} />
      <Sidebar onClose={() => setSidebarOpen(false)} open={isSidebarOpen} />
      <Box
        component="main"
        sx={{
          display: "flex",
          flex: "1 1 auto",
          flexDirection: "column",
          width: "100%",
          flexGrow: 1,
          py: 6,
        }}
      >
        {props.children}
      </Box>
    </LayoutRoot>
  );
}
