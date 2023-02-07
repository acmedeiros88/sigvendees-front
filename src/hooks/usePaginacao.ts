import { useState } from "react";

export default function usePaginacao(
  n_pagina: number,
  n_linhaPorPagina: number,
  dados: any[]
) {
  const [page, setPage] = useState(n_pagina);
  const [rowsPerPage, setRowsPerPage] = useState(n_linhaPorPagina);

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - dados.length) : 0;

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return {
    page,
    rowsPerPage,
    emptyRows,
    handleChangePage,
    handleChangeRowsPerPage,
  };
}
