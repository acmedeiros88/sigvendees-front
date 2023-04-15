import { ReactElement, useState } from "react";
import type { NextPageWithLayout } from "../_app";
// MUI CORE
import { Container, Box, Divider, Typography, Tabs } from "@mui/material";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
// COMPONENTS
import Layout from "../../components/layout";
import TitleAndButton from "../../components/TitleAndButton";
import { DataTable as GridPedidos } from "../../components/table/DataTable";
import { COLUMNS } from "../../components/pages/pedidos/ColumnsDataGrid";
// MOCKS
import { ROWS as PedidosCadastrados } from "../../__mocks/pedidosDataGrid";

const Page: NextPageWithLayout = () => {
  const [value, setValue] = useState<string>("0");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Container maxWidth={false}>
      <TitleAndButton title="Pedidos" hrefTo="pedidos/novo" />
      <GridPedidos columns={COLUMNS} rows={PedidosCadastrados}/>
    </Container>
  );
};

Page.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;

export default Page;
