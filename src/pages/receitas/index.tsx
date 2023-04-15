import { ReactElement, useState } from "react";
import type { NextPageWithLayout } from "../_app";
//MATERIAL UI
import { Container } from "@mui/material";
// COMPONENTS
import Layout from "../../components/layout";
import { DataTable as GridProdutos } from "../../components/table/DataTable";
import COLUMNS from "../../components/pages/receitas/ColumnsDataGrid";
import TitleAndButton from "../../components/TitleAndButton";
// MOCKS
import { ROWS as receitas } from "../../__mocks/receitasDataGrid";

const Page: NextPageWithLayout = () => {

  return (
    <Container maxWidth={false}>
      <TitleAndButton title="Receitas" hrefTo="receitas/novo" />
      <GridProdutos columns={COLUMNS} rows={receitas} />
    </Container>
  );
};

Page.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;

export default Page;
