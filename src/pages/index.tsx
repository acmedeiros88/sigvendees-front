import type { ReactElement } from "react";
import type { NextPageWithLayout } from "./_app";
import { Container as Contents } from "@mui/material";
import Layout from "../components/layout";

const Page: NextPageWithLayout = () => {
  return (
    <Contents maxWidth={false}>
      <p>HOME</p>
    </Contents>
  );
};

Page.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;

export default Page;
