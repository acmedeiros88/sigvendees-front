import NextLink from "next/link";
// MATERIAL UI
import { IconButton, Tooltip } from "@mui/material";
// MUI X
import { GridColDef, GridActionsCellItem } from "@mui/x-data-grid";
// ICONS
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import EditIcon from "@mui/icons-material/Edit";
import FindInPageTwoToneIcon from '@mui/icons-material/FindInPageTwoTone';

function handleDeletClick(id: number) {
  alert("DELETAR RECEITA [" + id + "]")
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
    flex: 2,
    minWidth: 200
  },
  {
    field: "rendimento",
    headerName: "Rendimento",
    flex: 0.5,
    minWidth: 100
  },
  {
    field: "custo_total",
    headerName: "Custo",
    flex: 0.5,
    minWidth: 50
  },
  {
    field: "actions",
    type: "actions",
    headerName: "Ações",
    flex: 0,
    minWidth: 150,
    getActions: (params) => [
      <GridActionsCellItem
        key={params.id}
        label="detalhes"
        icon={
          <Tooltip title="detalhes" arrow>
            <FindInPageTwoToneIcon color="primary" />
          </Tooltip>
        }
        onClick={() => alert("DETALHES [" + params.id + "]")}
      />,
      <>
        <Tooltip title="Editar" arrow>
          <IconButton
            LinkComponent={NextLink}
            href={`receitas/${params.id}/editar`}
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
