// MUI CORE
import Grid from "@mui/material/Unstable_Grid2";
import { Box, InputAdornment } from "@mui/material";
// COMPONENTS
import {
  InputData,
  InputAutocomplete,
  ButtonContained,
  ButtonsSubmitCancel,
  InputDataAdornments,
} from "../inputData";
import TableProdutos from "./TableProdutos";
// MOCKS
import { PRODUTOS_SELECT, PRODUTOS_PEDIDO as PRODUTOS } from "../../__mocks/produtos";

const FormEntrada = () => {
  return (
    <Box component="form">
      <Grid container spacing={3}>
        <InputAutocomplete
          name_id="listaProdutosEntrada"
          descLabel="Produto"
          options={PRODUTOS_SELECT}
          col_xs={12}
          col_md={12}
          col_lg={12}
        />
        <InputData
          name_id="qtdProdutoEntrada"
          descLabel="Quantidade"
          type="number"
          input_props={{ inputMode: "numeric", pattern: "[0-9]*", min: 1 }}
          col_xs={12}
          col_sm={6}
          col_md={4}
          col_lg={3}
        />
        <InputDataAdornments
          name_id="vlrCustoProduto"
          descLabel="Custo"
          type="number"
          input_props={{ inputMode: "numeric", pattern: "[0-9]*", min: 1 }}
          positionStartAdornment={
            <InputAdornment position="start">R$</InputAdornment>
          }
          col_xs={12}
          col_sm={6}
          col_md={4}
          col_lg={3}
        />
        <ButtonContained
          descLabel="Adicionar"
          container_style={{ alignSelf: "center" }}
          col_xs={12}
          col_sm={3}
          col_md={2}
          col_lg={2}
        />
        <Grid xs={12} md={12} lg={12}>
          <TableProdutos rows={PRODUTOS} />
        </Grid>
        <ButtonsSubmitCancel />
      </Grid>
    </Box>
  );
};

export default FormEntrada;
