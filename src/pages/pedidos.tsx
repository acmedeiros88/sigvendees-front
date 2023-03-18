import { ReactElement, useState } from "react";
import type { NextPageWithLayout } from "./_app";
// MUI CORE
import { Container, Box, Divider, Typography, Tabs } from "@mui/material";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
// COMPONENTS
import Layout from "../components/layout";
import FormCadastro from "../components/pages/pedidos/FormCadastro";
import { DataTable as GridPedidos } from "../components/table/DataTable";
import { COLUMNS } from "../components/pages/pedidos/ColumnsDataGrid";
// MOCKS
import { ROWS as PedidosCadastrados } from "../__mocks/pedidosDataGrid";

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
          PEDIDOS
        </Typography>
        <Divider />
      </Box>

      <Box sx={{ width: "100%", typography: "body1", pt: 1 }}>     
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange}>
              <Tab label="Cadastrar" value="0" />
              <Tab label="Gerenciar" value="1" />
            </TabList>
          </Box>
          <TabPanel value="0">
            <FormCadastro />
          </TabPanel>
          <TabPanel value="1">
            <GridPedidos columns={COLUMNS} rows={PedidosCadastrados}/>
          </TabPanel>
        </TabContext>
      </Box>
    </Container>
  );
};

Page.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;

export default Page;