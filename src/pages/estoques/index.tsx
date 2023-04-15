import { ReactElement } from "react";
import type { NextPageWithLayout } from "../_app";
//MATERIAL UI
import { Container } from "@mui/material";
// COMPONENTS
import Layout from "../../components/layout";
import { DataTable as GridEstoque } from "../../components/table/DataTable";
import COLUMNS from "../../components/pages/estoques/ColumnsDataGrid";
import TitleAndButton from "../../components/TitleAndButton";
// MOCKS
import { ROWS as EstoqueProdutos } from "../../__mocks/estoqueDataGrid";

const Page: NextPageWithLayout = () => {

  return (
    <Container maxWidth={false}>
      <TitleAndButton title="Estoques" descButton="Entrada" hrefTo="estoques/entrada" />
      <GridEstoque columns={COLUMNS} rows={EstoqueProdutos} />
    </Container>
  );
};

Page.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;

export default Page;
