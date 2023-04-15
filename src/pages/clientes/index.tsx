import { ReactElement } from "react";
import type { NextPageWithLayout } from "../_app";
//MATERIAL UI
import { Container } from "@mui/material";
// COMPONENTS
import Layout from "../../components/layout";
import { DataTable as GridClientes } from "../../components/table/DataTable";
import COLUMNS from "../../components/pages/clientes/ColumnsDataGrid";
import TitleAndButton from "../../components/TitleAndButton";
// MOCKS
import { ROWS as clientes } from "../../__mocks/clientesDataGrid";

const Page: NextPageWithLayout = () => {

  return (
    <Container maxWidth={false}>
      <TitleAndButton title="Clientes" hrefTo="clientes/novo" />
      <GridClientes columns={COLUMNS} rows={clientes} />
    </Container>
  );
};

Page.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;

export default Page;
