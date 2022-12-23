import { useState, useEffect } from "react";
import Router from "next/router";
import {
  Box,
  Popover,
  MenuList,
  MenuItem,
  Typography,
  Avatar,
} from "@mui/material";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { Usuario } from "../../models/IUsuario";

const usuario_dev = {
  nome: "ADMIN",
  email: "dev@teste.com",
};

export default function AccountDetailModal() {
  const [usuario, setUsuario] = useState<Usuario>({ nome: "", email: "" });
  const [openModal, setOpenModal] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setUsuario(usuario_dev);
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
          <Typography variant="overline">{usuario.nome}</Typography>
          <Typography color="text.secondary" variant="body2">
            {usuario.email}
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
