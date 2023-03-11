// MUI CORE
import { Tooltip } from "@mui/material";
// MUI X
import { GridActionsCellItem, GridColDef } from "@mui/x-data-grid";
// ICONS
import TaskAltRoundedIcon from "@mui/icons-material/TaskAltRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import ShoppingCartCheckoutRoundedIcon from "@mui/icons-material/ShoppingCartCheckoutRounded";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import FormatListBulletedRoundedIcon from "@mui/icons-material/FormatListBulletedRounded";

export const COLUMNS: GridColDef[] = [
  { field: "id", headerName: "Código",
    type: "number",
    width: 70,
    headerAlign: "left",
    align: "left"
  },
  { field: "nomeCliente",
    headerName: "Cliente",
    flex: 1.5,
    minWidth: 200
  },
  {
    field: "dataInsert",
    headerName: "Solicitado",
    type: "date",
    valueGetter: ({ value }) => value && new Date(value),
    flex: 0.5,
    minWidth: 100
  },
  {
    field: "dataEntrega",
    headerName: "Entrega",
    type: "date",
    valueGetter: ({ value }) => value && new Date(value),
    flex: 0.5,
    minWidth: 100
  },
  { field: "status",
    headerName: "Status",
    flex: 1,
    minWidth: 145
  },
  {
    field: "actions",
    headerName: "Ação",
    type: "actions",
    flex: 1,
    minWidth: 100,
    getActions: (params) => [
      <GridActionsCellItem
        key={params.id}
        label="Itens"
        icon={
          <Tooltip title="Itens do Pedido">
            <FormatListBulletedRoundedIcon />
          </Tooltip>
        }
        onClick={() => alert("ITENS DO PEDIDO: [" + params.id + "]")}
      />,
      <GridActionsCellItem
        key={params.id}
        label="Pronto"
        icon={
          <Tooltip title="Marcar como pronto">
            <TaskAltRoundedIcon />
          </Tooltip>
        }
        onClick={() => alert("PEDIDO [" + params.id + "] PRONTO")}
      />,
      <GridActionsCellItem
        key={params.id}
        label="Venda"
        icon={
          <Tooltip title="Finalizar venda">
            <ShoppingCartCheckoutRoundedIcon />
          </Tooltip>
        }
        onClick={() => alert("FINALIZAR VENDA PEDIDO: [" + params.id + "]")}
      />,
      <GridActionsCellItem
        key={params.id}
        label="Editar"
        icon={<EditRoundedIcon />}
        onClick={() => alert("EDITAR PEDIDO: [" + params.id + "]")}
        showInMenu
      />,
      <GridActionsCellItem
        key={params.id}
        label="Cancelar"
        icon={<CancelRoundedIcon />}
        onClick={() => alert("CANCELAR PEDIDO: [" + params.id + "]")}
        showInMenu
      />,
      <GridActionsCellItem
        key={params.id}
        label="Deletar"
        icon={<DeleteRoundedIcon />}
        onClick={() => alert("DELETAR PEDIDO: [" + params.id + "]")}
        showInMenu
      />,
    ],
  },
];
