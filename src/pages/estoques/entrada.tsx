import { ReactElement } from "react";
import type { NextPageWithLayout } from "../_app";
//MATERIAL UI
import { Container } from "@mui/material";
// COMPONENTS
import Layout from "../../components/layout";
import FormEntrada from "../../components/pages/estoques/FormEntrada";

const Page: NextPageWithLayout = () => {
  return (
    <Container maxWidth={false}>
      <FormEntrada titulo="Entrada estoque" />
    </Container>
  );
};

Page.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;

export default Page;
