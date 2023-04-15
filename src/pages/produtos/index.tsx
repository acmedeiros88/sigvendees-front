import { ReactElement } from "react";
import type { NextPageWithLayout } from "../_app";
//MATERIAL UI
import { Container } from "@mui/material";
// COMPONENTS
import Layout from "../../components/layout";
import { DataTable as GridProdutos } from "../../components/table/DataTable";
import COLUMNS from "../../components/pages/produtos/ColumnsDataGrid";
import TitleAndButton from "../../components/TitleAndButton";
// MOCKS
import { ROWS as PRODUTOS } from "../../__mocks/produtos";

const Page: NextPageWithLayout = () => {

  return (
    <Container maxWidth={false}>
      <TitleAndButton title="Produtos" hrefTo="produtos/novo" />
      <GridProdutos columns={COLUMNS} rows={PRODUTOS} />
    </Container>
  );
};

Page.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;

export default Page;
