// MUI X
import { GridColDef } from "@mui/x-data-grid";

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
    field: "produto",
    headerName: "Produto",
    flex: 1.5,
    minWidth: 200
  },
  {
    field: "minimo",
    headerName: "Mínimo",
    flex: 0.5,
    minWidth: 130,
  },
  {
    field: "atual",
    headerName: "Atual",
    flex: 0.5,
    minWidth: 130,
  },
  {
    field: "valor",
    headerName: "Total R$",
    flex: 0.5,
    minWidth: 100
  },
  {
    field: "tipo",
    headerName: "Tipo",
    flex: 0.5,
    minWidth: 130
  }
];
