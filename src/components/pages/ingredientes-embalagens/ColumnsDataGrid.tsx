import NextLink from "next/link";
// MATERIAL UI
import { IconButton, Tooltip } from "@mui/material";
// MUI X
import { GridColDef, GridActionsCellItem } from "@mui/x-data-grid";
// ICONS
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import EditIcon from "@mui/icons-material/Edit";

function handleDeletClick(id: number) {
  alert("DELETAR ITEM [" + id + "]")
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
    flex: 1.5,
    minWidth: 200
  },
  {
    field: "tipo",
    headerName: "Tipo",
    flex: 0.5,
    minWidth: 130,
  },
  {
    field: "undMedida",
    headerName: "Medida",
    flex: 0.5,
    minWidth: 100,
  },
  {
    field: "qtdMinimaEmEstoque",
    headerName: "Estoque mínimo",
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
            href={`ingredientes-embalagens/${params.id}/editar`}
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
