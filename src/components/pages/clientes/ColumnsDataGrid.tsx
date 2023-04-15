import NextLink from "next/link";
// MATERIAL UI
import { IconButton, Tooltip } from "@mui/material";
// MUI X
import { GridColDef, GridActionsCellItem } from "@mui/x-data-grid";
// ICONS
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import EditIcon from "@mui/icons-material/Edit";

function handleDeletClick(id: number) {
  alert("DELETAR CLIENTE [" + id + "]")
}

const COLUMNS: GridColDef[] = [
  {
    field: "id",
    headerName: "Código",
    type: "number",
    width: 70,
    headerAlign: "left",
    align: "left",
  },
  {
    field: "nome",
    headerName: "Nome",
    flex: 1,
    minWidth: 250
  },
  {
    field: "telefone",
    headerName: "Telefone",
    flex: 0.5,
    minWidth: 130,
  },
  {
    field: "email",
    headerName: "Email",
    flex: 1,
    minWidth: 180,
  },
  {
    field: "endereco",
    headerName: "Endereço",
    flex: 1,
    minWidth: 150
  },
  {
    field: "observacao",
    headerName: "Observação",
    flex: 0.5,
    minWidth: 100
  },
  {
    field: "actions",
    type: "actions",
    headerName: "Ações",
    flex: 0,
    minWidth: 150,
    getActions: (params) => [
      <>
        <Tooltip title="Editar" arrow>
          <IconButton
            LinkComponent={NextLink}
            href={`clientes/${params.id}/editar`}
          >
            <EditIcon color="info" />
          </IconButton>
        </Tooltip>
      </>,
      <GridActionsCellItem
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

export default COLUMNS;
