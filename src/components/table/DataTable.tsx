// MUI X
import {
  DataGrid,
  GridColDef,
  gridPageCountSelector,
  GridPagination,
  GridToolbarQuickFilter,
  useGridApiContext,
  useGridSelector,
} from "@mui/x-data-grid";
// MUI CORE
import {
  Box,
  TablePaginationProps,
  Pagination,
} from "@mui/material";

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

function MuiPagination({
  page,
  onPageChange,
  className,
}: Pick<TablePaginationProps, "page" | "onPageChange" | "className">) {
  const apiRef = useGridApiContext();
  const pageCount = useGridSelector(apiRef, gridPageCountSelector);

  return (
    <Pagination
      shape="rounded"
      color="secondary"
      size="small"
      className={className}
      showFirstButton
      showLastButton
      count={pageCount}
      page={page + 1}
      onChange={(event, newPage) => {
        onPageChange(event as any, newPage - 1);
      }}
    />
  );
}

function CustomPagination(props: any) {
  return <GridPagination ActionsComponent={MuiPagination} {...props} />;
}

export const DataTable = () => {

  return (
    <Box sx={{ height: 750, width: 1 }}>
      <DataGrid
        pagination
        disableRowSelectionOnClick
        disableColumnFilter
        columns={columns}
        rows={rows}
        pageSizeOptions={[10, 20, 50, 100]}
        getEstimatedRowHeight={() => 52}
        getRowHeight={() => "auto"}
        slots={{
          toolbar: QuickSearchToolbar,
          pagination: CustomPagination,
        }}
        initialState={{
          pagination: { paginationModel: { pageSize: 10 } },
        }}
        sx={{
          '&.MuiDataGrid-root--densityStandard .MuiDataGrid-cell': { py: '15px' }
        }}
      />
    </Box>
  );
};
