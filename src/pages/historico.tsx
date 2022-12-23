import type { ReactElement } from "react";
import type { NextPageWithLayout } from "./_app";
import { Box, Container as Contents, Divider, Typography } from "@mui/material";
import Layout from "../components/layout";

const Page: NextPageWithLayout = () => {
  return (
    <Contents maxWidth={false}>
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
          HISTÓRICO
        </Typography>
        <Divider />
      </Box>
    </Contents>
  );
};

Page.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;

export default Page;
