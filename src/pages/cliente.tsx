import { ReactElement, useState } from "react";
import type { NextPageWithLayout } from "./_app";
import { Container as Contents, Box, Divider, Typography } from "@mui/material";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Layout from "../components/layout";

const Page: NextPageWithLayout = () => {
  const [value, setValue] = useState<string>("0");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

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
          CLIENTE
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
            Formulario cadastro de cliente
          </TabPanel>
          <TabPanel value="1">
            Tabela com clientes cadastrados
          </TabPanel>
        </TabContext>
      </Box>
    </Contents>
  );
};

Page.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;

export default Page;
