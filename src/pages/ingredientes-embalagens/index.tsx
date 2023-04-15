import { ReactElement } from "react";
import type { NextPageWithLayout } from "../_app";
//MATERIAL UI
import { Container } from "@mui/material";
// COMPONENTS
import Layout from "../../components/layout";
import { DataTable as GridIngredientesEmbalagens } from "../../components/table/DataTable";
import COLUMNS from "../../components/pages/ingredientes-embalagens/ColumnsDataGrid";
import TitleAndButton from "../../components/TitleAndButton";
// MOCKS
import { ROWS as IGREDIENTES_EMBALAGENS } from "../../__mocks/ingredientesEmbalagensDataGrid";

const Page: NextPageWithLayout = () => {

  return (
    <Container maxWidth={false}>
      <TitleAndButton title="Ingredientes/Embalagens" hrefTo="ingredientes-embalagens/novo" />
      <GridIngredientesEmbalagens columns={COLUMNS} rows={IGREDIENTES_EMBALAGENS} />
    </Container>
  );
};

Page.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;

export default Page;
