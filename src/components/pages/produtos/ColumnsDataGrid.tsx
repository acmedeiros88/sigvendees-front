import NextLink from "next/link";
// MATERIAL UI
import { IconButton, Tooltip } from "@mui/material";
// MUI X
import { GridColDef, GridActionsCellItem } from "@mui/x-data-grid";
// ICONS
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import EditIcon from "@mui/icons-material/Edit";

function handleDeletClick(id: number) {
  alert("DELETAR PRODUTO [" + id + "]")
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
    field: "venda_em",
    headerName: "Venda em",
    flex: 0.5,
    minWidth: 100,
  },
  {
    field: "vlr_venda",
    headerName: "Valor de venda",
    flex: 0.5,
    minWidth: 100
  },
  // {
  //   field: "vlr_lucro",
  //   headerName: "Lucro",
  //   flex: 0.5,
  //   minWidth: 50
  // },
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
            href={`produtos/${params.id}/editar`}
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
