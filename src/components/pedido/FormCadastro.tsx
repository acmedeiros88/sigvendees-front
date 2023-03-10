import { useState } from "react";
// MUI CORE
import Grid from "@mui/material/Unstable_Grid2";
import { Box, InputAdornment } from "@mui/material";
// COMPONENTS
import {
  InputData,
  InputDate,
  InputSelect,
  ButtonContained,
  InputDataAdornments,
  ButtonsSubmitCancel,
} from "../inputData";
import TableProdutos from "./TableProdutos";
// MOCKS
import { PRODUTOS_SELECT, PRODUTOS_PEDIDO } from "../../__mocks/produtos";

const FormCadastro = () => {
  const [dataEntrega, setDataEntrega] = useState<Date | null>(null);

  const handleChangeData = (newValue: Date | null) => {
    setDataEntrega(newValue);
    console.log("DATA SELECIONADA " + dataEntrega);
  };

  return (
    <Box component="form">
      <Grid container spacing={3}>
        <InputData
          name_id="identificacaoClientePedido"
          descLabel="Cliente"
          descPlaceholder="Digite o nome ou telefone"
          col_xs={12}
          col_md={12}
          col_lg={9}
        />
        <InputDate
          name_id="dataEntregaPedido"
          descLabel="Entrega"
          value={dataEntrega}
          setValue={setDataEntrega}
          col_xs={12}
          col_md={12}
          col_lg={3}
        />
        <InputSelect
          name_id="listaProdutosPedido"
          descLabel="Produto"
          options={PRODUTOS_SELECT}
          col_xs={12}
          col_md={12}
          col_lg={12}
        />
        <InputData
          name_id="qtdProdutoSelecionadoPedido"
          descLabel="Quantidade"
          type="number"
          input_props={{ inputMode: "numeric", pattern: "[0-9]*", min: 1 }}
          col_xs={6}
          col_md={6}
          col_lg={2}
        />
        <InputDataAdornments
          name_id="vlrUntProdutoSelecionadoPedido"
          descLabel="Valor unitário"
          type="number"
          input_props={{ inputMode: "numeric", pattern: "[0-9]*", min: 1 }}
          positionStartAdornment={
            <InputAdornment position="start">R$</InputAdornment>
          }
          col_xs={6}
          col_md={6}
          col_lg={3}
        />
        <InputDataAdornments
          name_id="vlrDescontoProdutoSelecionadoPedido"
          descLabel="Desconto"
          type="number"
          input_props={{ inputMode: "numeric", pattern: "[0-9]*", min: 1 }}
          positionStartAdornment={
            <InputAdornment position="start">R$</InputAdornment>
          }
          col_xs={6}
          col_md={6}
          col_lg={2}
        />
        <InputDataAdornments
          name_id="vlrTotalProdutoSelecionadoPedido"
          descLabel="Total"
          type="number"
          input_props={{ inputMode: "numeric", pattern: "[0-9]*", min: 1 }}
          positionStartAdornment={
            <InputAdornment position="start">R$</InputAdornment>
          }
          col_xs={6}
          col_md={6}
          col_lg={3}
        />
        <ButtonContained
          descLabel="Adicionar"
          style={{ width: "100%" }}
          container_style={{ alignSelf: "center" }}
          col_xs={12}
          col_md={12}
          col_lg={2}
        />
        <Grid xs={12} md={12} lg={12}>
          <TableProdutos rows={PRODUTOS_PEDIDO} />
        </Grid>
        <ButtonsSubmitCancel />
      </Grid>
    </Box>
  );
};

export default FormCadastro;
