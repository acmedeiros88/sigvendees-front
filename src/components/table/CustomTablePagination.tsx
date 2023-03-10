// MUI CORE
import { TableRow, TablePagination } from "@mui/material";
// COMPONENTS
import { TablePaginationActions } from "./PaginationActions";

interface PaginationProps {
  dados: any[];
  page: number;
  rowsPerPage: number;
  colSpan: number;
  rowsPerPageOptions: any;
  onPageChange(event: unknown, newPage: number): void;
  onRowsPerPageChange(event: React.ChangeEvent<HTMLInputElement>): void;
}

const CustomTablePagination = (props: PaginationProps) => {
  return (
    <TableRow>
      <TablePagination
        rowsPerPageOptions={props.rowsPerPageOptions}
        colSpan={props.colSpan}
        count={props.dados.length}
        rowsPerPage={props.rowsPerPage}
        page={props.page}
        onPageChange={props.onPageChange}
        onRowsPerPageChange={props.onRowsPerPageChange}
        ActionsComponent={TablePaginationActions}
      />
    </TableRow>
  );
};

export default CustomTablePagination;
