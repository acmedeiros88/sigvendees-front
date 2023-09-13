import { ReactElement } from "react";
import type { NextPageWithLayout } from "../_app";
import { GetServerSideProps } from "next";
//MATERIAL UI
import { Container } from "@mui/material";
// COMPONENTS
import Layout from "../../components/layout";
import TitleAndButton from "../../components/TitleAndButton";
import { GridClientes } from "../../components/pages/clientes/GridClientes";
//SERVICES
import { getApiServerSide } from "../../services/serverSideFetch";
import { getErrors } from "../../utils/errors";
// MODELS
import { Cliente } from "../../@types/Cliente";

const Page: NextPageWithLayout<{ clientes: Cliente[] }> = ({ clientes }) => {
  return (
    <Container maxWidth={false}>
      <TitleAndButton title="Clientes" hrefTo="clientes/novo" />
      <GridClientes clientes={clientes} />
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const { apiServerSide } = getApiServerSide(ctx);

    const { data: clientes } = await apiServerSide.get("/clientes");

    return {
      props: { clientes },
    };

  } catch (e) {
    getErrors(e);

    return {
      redirect: {
        destination: "500",
        permanent: false,
      },
    };

  }
}

Page.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;

export default Page;
