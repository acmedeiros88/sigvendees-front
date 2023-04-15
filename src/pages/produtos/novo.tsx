import { ReactElement } from "react";
import type { NextPageWithLayout } from "../_app";
//MATERIAL UI
import { Container } from "@mui/material";
// COMPONENTS
import Layout from "../../components/layout";
import FormCadastro from "../../components/pages/produtos/FormCadastro";

const Page: NextPageWithLayout = () => {
  return (
    <Container maxWidth={false}>
      <FormCadastro titulo="Cadastrar um novo produto" />
    </Container>
  );
};

Page.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;

export default Page;
