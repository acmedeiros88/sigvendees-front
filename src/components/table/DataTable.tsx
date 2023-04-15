import { memo } from "react";
// MUI X
import {
  DataGrid,
  GridColDef,
  gridPageCountSelector,
  GridPagination,
  GridToolbarQuickFilter,
  useGridApiContext,
  useGridSelector,
  GridRow,
  GridColumnHeaders,
} from "@mui/x-data-grid";
// MATERIAL UI
import { Box, TablePaginationProps, Pagination } from "@mui/material";

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

const MemoizedRow = memo(GridRow);
const MemoizedColumnHeaders = memo(GridColumnHeaders);

export const DataTable = (props: DataTableProps) => {
  return (
    <Box sx={{ height: 750, width: 1 }}>
      <DataGrid
        pagination
        disableRowSelectionOnClick
        columns={props.columns}
        rows={props.rows}
        pageSizeOptions={[10, 20, 50, 100]}
        slots={{
          toolbar: QuickSearchToolbar,
          pagination: CustomPagination,
          row: MemoizedRow,
          columnHeaders: MemoizedColumnHeaders,
        }}
        initialState={{
          pagination: { paginationModel: { pageSize: 10 } },
        }}
        getEstimatedRowHeight={() => 52}
        getRowHeight={() => "auto"}
        sx={{
          "&.MuiDataGrid-root--densityStandard .MuiDataGrid-cell": { py: "5px" }
        }}
      />
    </Box>
  );
};
