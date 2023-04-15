// MATERIAL UI
import {
    Paper,
    Table,
    TableContainer,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    TableFooter,
    Tooltip,
  } from "@mui/material";
  // ICONS
  import IconButton from "@mui/material/IconButton";
  import DeleteIcon from "@mui/icons-material/Delete";
  // HOOKS
  import usePaginacao from "../../../hooks/usePaginacao";
  // COMPONENTS
  import CustomTablePagination from "../../table/CustomTablePagination";
  import StyledTableCell from "../../table/StyledTableCell";
  
  const TableItens = ({ rows }: { rows: any[] }) => {
    const {
      page,
      rowsPerPage,
      emptyRows,
      handleChangePage,
      handleChangeRowsPerPage,
    } = usePaginacao(0, 5, rows);
  
    return (
      <TableContainer component={Paper}>
        <Table size="small" sx={{ minHeight: rows.length > 0 ? 0 : 150 }}>
          <TableHead>
            <TableRow>
              <StyledTableCell>Código</StyledTableCell>
              <StyledTableCell>Produto</StyledTableCell>
              <StyledTableCell>Qtd</StyledTableCell>
              <StyledTableCell>Custo&nbsp;R$</StyledTableCell>
              <StyledTableCell>Ação</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.length > 0 ? (
              (rowsPerPage > 0
                ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                : rows
              ).map((row) => (
                <TableRow hover key={row.id}>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.nome}</TableCell>
                  <TableCell>{row.qtd}</TableCell>
                  <TableCell>{row.custo}</TableCell>
                  <TableCell>
                    <Tooltip title="Deletar" arrow>
                      <IconButton size="small" onClick={() => alert("EXCLUIR LINHA: [" + row.id + "]")}>
                        <DeleteIcon fontSize="small" />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={7}
                  align="center"
                  sx={{ color: "rgba(55, 65, 81, 0.48)" }}
                >
                  Nenhum produto selecionado
                </TableCell>
              </TableRow>
            )}
            {emptyRows > 0 && (
              <TableRow style={{ height: 35 * emptyRows }}>
                <TableCell colSpan={7} />
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            {rows.length > 5 && (
              <CustomTablePagination
                dados={rows}
                rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                colSpan={5}
                page={page}
                rowsPerPage={rowsPerPage}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            )}
          </TableFooter>
        </Table>
      </TableContainer>
    );
  };
  
  export default TableItens;
  