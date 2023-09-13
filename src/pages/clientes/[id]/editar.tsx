import { ReactElement } from "react";
import type { NextPageWithLayout } from "../../_app";
//MATERIAL UI
import { Container } from "@mui/material";
// COMPONENTS
import Layout from "../../../components/layout";
import { FormCadastro } from "../../../components/pages/clientes/FormCadastro";

const Page: NextPageWithLayout = () => {
  return (
    <Container maxWidth={false}>
      <FormCadastro titulo="Editar cliente" />
    </Container>
  );
};

Page.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;

export default Page;
