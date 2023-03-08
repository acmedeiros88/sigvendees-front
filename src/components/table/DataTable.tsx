import { useState } from "react";
import {
  Box,
  InputBase,
  Typography,
  NativeSelect,
  Pagination,
  Stack,
  styled,
} from "@mui/material";
import {
  DataGrid,
  GridColDef,
  gridPageCountSelector,
  gridPageSelector,
  GridToolbarQuickFilter,
  useGridApiContext,
  useGridSelector,
} from "@mui/x-data-grid";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 90,
  },
  {
    field: "fullName",
    headerName: "Full name",
    sortable: false,
    width: 160,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon-1", age: 35 },
  { id: 2, lastName: "Lannister2", firstName: "Cersei-2", age: 42 },
  { id: 3, lastName: "Lannister3", firstName: "Jaime-3", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya-4", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys-5", age: null },
  { id: 6, lastName: "Melisandre", firstName: "null-6", age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara-7", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini-8", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey-9", age: 65 },
  { id: 10, lastName: "Rosana", firstName: "Harvey-10", age: 63 },
  { id: 11, lastName: "Snow", firstName: "Jon-11", age: 35 },
  { id: 12, lastName: "Lannister", firstName: "Cersei-12", age: 42 },
  { id: 13, lastName: "Lannister", firstName: "Jaime-13", age: 45 },
  { id: 14, lastName: "Stark", firstName: "Arya-14", age: 16 },
  { id: 15, lastName: "Targaryen", firstName: "Daenerys-15", age: null },
  { id: 16, lastName: "Melisandre", firstName: "null-16", age: 150 },
  { id: 17, lastName: "Clifford", firstName: "Ferrara-17", age: 44 },
  { id: 18, lastName: "Frances", firstName: "Rossini-18", age: 36 },
  { id: 19, lastName: "Roxie", firstName: "Harvey-19", age: 65 },
  { id: 20, lastName: "Rosana", firstName: "Harvey-20", age: 63 },
];

interface DataTableProps {
  columns: GridColDef[];
  rows: any[];
}

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "& .MuiInputBase-input": {
    position: "relative",
    fontSize: 14,
    padding: "0px 30px 0px 10px",
    "&:focus": {
      borderRadius: 4,
      backgroundColor: theme.palette.action.focus,
    },
  },
}));

function QuickSearchToolbar() {
  return (
    <Box
      sx={{
        p: 0.5,
        pb: 0,
      }}
    >
      <GridToolbarQuickFilter />
    </Box>
  );
}

function CustomPagination() {
  const apiRef = useGridApiContext();
  const page = useGridSelector(apiRef, gridPageSelector);
  const pageCount = useGridSelector(apiRef, gridPageCountSelector);
  const [rowsPerPage, setRowsPerPage] = useState<number>(5);

  const handleChange = (event: { target: { value: string } }) => {
    setRowsPerPage(+event.target.value);
    apiRef.current.setPageSize(+event.target.value);
    apiRef.current.setPage(0);
  };

  return (
    <Stack direction="row" spacing={0.5}>
      <Typography variant="inherit" sx={{ alignSelf: "center" }}>
        Linhas por página:
      </Typography>
      <NativeSelect
        value={rowsPerPage}
        onChange={handleChange}
        input={<BootstrapInput />}
      >
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={25}>25</option>
        <option value={50}>50</option>
        <option value={100}>100</option>
      </NativeSelect>
      <Pagination
        shape="rounded"
        color="secondary"
        count={pageCount}
        page={page + 1}
        onChange={(event, value) => apiRef.current.setPage(value - 1)}
        sx={{ pl: 5 }}
      />
    </Stack>
  );
}

export const DataTable = () => {
  const [pageSize, setPageSize] = useState<number>(5);

  return (
    <Box sx={{ height: 500, width: 1 }}>
      <DataGrid
        columns={columns}
        rows={rows}
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        components={{
          Toolbar: QuickSearchToolbar,
          Pagination: CustomPagination,
        }}
        pagination
        disableSelectionOnClick
        disableColumnFilter
      />
    </Box>
  );
};
