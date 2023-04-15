import NextLink from "next/link";
// MATERIAL UI
import { IconButton, Tooltip, Chip } from "@mui/material";
// MUI X
import { GridActionsCellItem, GridColDef } from "@mui/x-data-grid";
// ICONS
import TaskAltRoundedIcon from "@mui/icons-material/TaskAltRounded";
import EditIcon from "@mui/icons-material/Edit";
import ShoppingCartCheckoutRoundedIcon from "@mui/icons-material/ShoppingCartCheckoutRounded";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import FormatListBulletedRoundedIcon from "@mui/icons-material/FormatListBulletedRounded";

function handleDeletClick(id: number) {
  alert("DELETAR PEDIDO [" + id + "]")
}

export const COLUMNS: GridColDef[] = [
  {
    field: "id",
    headerName: "Código",
    type: "number",
    width: 70,
    headerAlign: "left",
    align: "left",
  },
  {
    field: "nomeCliente",
    headerName: "Cliente",
    flex: 1.5,
    minWidth: 200,
  },
  {
    field: "dataInsert",
    headerName: "Solicitado",
    type: "date",
    valueGetter: ({ value }) => value && new Date(value),
    flex: 0.5,
    minWidth: 100,
  },
  {
    field: "dataEntrega",
    headerName: "Entrega",
    type: "date",
    valueGetter: ({ value }) => value && new Date(value),
    flex: 0.5,
    minWidth: 100,
  },
  {
    field: "status",
    headerName: "Status",
    flex: 1,
    minWidth: 150,
    renderCell: (params) => (
      <Chip label={params.row.status} size="small" sx={{ minWidth: 150 }} />
    )
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
          <Tooltip title="Itens" arrow>
            <FormatListBulletedRoundedIcon />
          </Tooltip>
        }
        onClick={() => alert("ITENS DO PEDIDO: [" + params.id + "]")}
      />,
      <GridActionsCellItem
        key={params.id}
        label="Pronto"
        icon={
          <Tooltip title="Marcar como pronto" arrow>
            <TaskAltRoundedIcon />
          </Tooltip>
        }
        onClick={() => alert("PEDIDO [" + params.id + "] PRONTO")}
      />,
      <GridActionsCellItem
        key={params.id}
        label="Venda"
        icon={
          <Tooltip title="Finalizar venda" arrow>
            <ShoppingCartCheckoutRoundedIcon />
          </Tooltip>
        }
        onClick={() => alert("FINALIZAR VENDA PEDIDO: [" + params.id + "]")}
      />,
      <>
        <Tooltip title="Editar" arrow>
          <IconButton
            LinkComponent={NextLink}
            href={`pedidos/${params.id}/editar`}
          >
            <EditIcon color="info" />
          </IconButton>
        </Tooltip>
      </>,
      <GridActionsCellItem
        showInMenu
        key={params.id}
        label="Cancelar"
        icon={
          <Tooltip title="Cancelar" arrow>
            <CancelRoundedIcon />
          </Tooltip>
        }
        onClick={() => alert("CANCELAR PEDIDO: [" + params.id + "]")}
      />,
      <GridActionsCellItem
        showInMenu
        key={params.id}
        label="Deletar"
        icon={
          <Tooltip title="Deletar" arrow>
            <DeleteRoundedIcon color="error" />
          </Tooltip>
        }
        onClick={() => handleDeletClick(Number(params.id))}
      />,
    ],
  },
];
