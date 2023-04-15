import { useState, useEffect, useCallback } from "react";
import Router from "next/router";
// MATERIAL UI
import {
  Box,
  Popover,
  MenuList,
  MenuItem,
  Typography,
  Avatar,
} from "@mui/material";
// ICONS
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
// MODELS
import { Usuario } from "../../@types/Usuario";
// MOCKS
import { USUARIO_DEV } from "../../__mocks/usuario";

export default function AccountDetailModal() {
  const [usuario, setUsuario] = useState<Usuario | null>(null);
  const [openModal, setOpenModal] = useState<HTMLElement | null>(null);

  const handleGetData = useCallback(async () => {
    setUsuario(USUARIO_DEV);
  }, []);

  const handleOpen = (event: any) => {
    setOpenModal(event.currentTarget);
  };

  const handleClose = () => {
    setOpenModal(null);
  };

  const handleLogoutOut = async () => {
    handleClose();

    try {
      //await auth.signOut();

      Router.push("/login").catch(console.error);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    handleGetData();
  }, [handleGetData]);

  return (
    <>
      <Avatar
        onClick={handleOpen}
        src="/images/avatar.png"
        sx={{
          cursor: "pointer",
          height: 40,
          width: 40,
          ml: 1,
        }}
      />

      <Popover
        open={Boolean(openModal)}
        anchorEl={openModal}
        onClose={handleClose}
        anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
        PaperProps={{ sx: { width: "300px" } }}
      >
        <Box sx={{ py: 1.5, px: 2 }}>
          <Typography variant="overline">{usuario?.nome}</Typography>
          <Typography color="text.secondary" variant="body2">
            {usuario?.email}
          </Typography>
        </Box>
        <MenuList
          disablePadding
          sx={{
            "& > *": {
              "&:first-of-type": {
                borderTopColor: "divider",
                borderTopStyle: "solid",
                borderTopWidth: "1px",
              },
              padding: "12px 16px",
            },
          }}
        >
          <MenuItem onClick={handleLogoutOut}>
            <Typography pr={27} color="text.secondary" variant="body2">
              Sair
            </Typography>
            <LogoutOutlinedIcon fontSize="small" color="action" />
          </MenuItem>
        </MenuList>
      </Popover>
    </>
  );
}
