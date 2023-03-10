import type { ReactElement } from "react";
import type { NextPageWithLayout } from "./_app";
// MUI CORE
import { Container } from "@mui/material";
// COMPONENTS
import Layout from "../components/layout";

const Page: NextPageWithLayout = () => {
  return (
    <Container maxWidth={false}>
      <p>HOME</p>
    </Container>
  );
};

Page.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;

export default Page;
