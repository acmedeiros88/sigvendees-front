import type { ReactElement } from "react";
import type { NextPageWithLayout } from "./_app";
// MUI CORE
import { Box, Container, Divider, Typography } from "@mui/material";
// COMPONENTS
import Layout from "../components/layout";

const Page: NextPageWithLayout = () => {
  return (
    <Container maxWidth={false}>
      <Box>
        <Typography
          variant="h4"
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            pb: 0.5,
          }}
        >
          BALANÇO
        </Typography>
        <Divider />
      </Box>
    </Container>
  );
};

Page.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;

export default Page;
