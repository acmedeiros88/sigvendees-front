import { ReactElement, useState } from "react";
import type { NextPageWithLayout } from "./_app";
// MUI CORE
import { Container, Box, Divider, Typography } from "@mui/material";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
// COMPONENTS
import Layout from "../components/layout";
import FormCadastro from "../components/estoque/FormCadastro";
import FormEntrada from "../components/estoque/FormEntrada";
import { DataTable as GridEstoque } from "../components/table/DataTable";
import { COLUMNS } from "../components/estoque/ColumnsDataGrid";
// MOCKS
import { ROWS as EstoqueProdutos } from "../__mocks/estoqueDataGrid";

const Page: NextPageWithLayout = () => {
  const [value, setValue] = useState<string>("0");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

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
          ESTOQUE
        </Typography>
        <Divider />
      </Box>

      <Box sx={{ width: "100%", typography: "body1", pt: 1 }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange}>
              <Tab label="Entrada" value="0" />
              <Tab label="Cadastrar" value="1" />
              <Tab label="Consultar" value="2" />
            </TabList>
          </Box>
          <TabPanel value="0">
            <FormEntrada />
          </TabPanel>
          <TabPanel value="1">
            <FormCadastro />
          </TabPanel>
          <TabPanel value="2">
            <GridEstoque columns={COLUMNS} rows={EstoqueProdutos} />
          </TabPanel>
        </TabContext>
      </Box>
    </Container>
  );
};

Page.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;

export default Page;
