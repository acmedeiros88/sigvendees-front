// MATERIAL UI
import styled from "@emotion/styled";
import { AppBar, Box, IconButton, Toolbar } from "@mui/material";
// ICONS
import MenuIcon from "@mui/icons-material/Menu";
// COMPONENTS
import NotificationModal from "./NotificationsModal";
import AccountDetailModal from "./AccountDetailModal";
import ToggleColorModeIcon from "./ToggleColorModeIcon";

interface NavbarHeaderProps {
  onSidebarOpen(): void;
  other?: any;
}

const NavbarRoot = styled(AppBar)(({ theme }: any) => ({
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[3],
}));

export default function NavbarHeader(props: NavbarHeaderProps) {
  return (
    <NavbarRoot
      sx={{
        left: { lg: 250 },
        width: { lg: "calc(100% - 250px)" },
      }}
      {...props.other}
    >
      <Toolbar disableGutters sx={{ minHeight: 64, left: 0, px: 3 }}>
        <IconButton
          onClick={props.onSidebarOpen}
          sx={{ display: { xs: "inline-flex", lg: "none" } }}
        >
          <MenuIcon fontSize="small" />
        </IconButton>

        <Box sx={{ flexGrow: 1 }} />

        <NotificationModal />
        <ToggleColorModeIcon />
        <AccountDetailModal />
      </Toolbar>
    </NavbarRoot>
  );
}
