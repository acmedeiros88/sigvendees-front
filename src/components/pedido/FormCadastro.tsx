import { useState } from "react";
import { Box, InputAdornment } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import {
  InputData,
  InputDate,
  InputSelect,
  ButtonContained,
  InputDataAdornments,
} from "../inputData";
import { PRODUTOS_DEV } from "../../_mocks/produtos";

export const FormCadastro = () => {
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
          col_xs={8}
          col_md={8}
          col_lg={10}
        />
        <InputDate
          name_id="dataEntregaPedido"
          descLabel="Entrega"
          value={dataEntrega}
          handleChange={handleChangeData}
          col_xs={4}
          col_md={4}
          col_lg={2}
        />
        <InputSelect
          name_id="listaProdutosPedido"
          descLabel="Produto"
          options={PRODUTOS_DEV}
          col_xs={12}
          col_md={12}
          col_lg={12}
        />
        <InputData
          name_id="qtdProdutoSelecionadoPedido"
          descLabel="Quantidade"
          type="numeric"
          patternNumber="[0-9]*"
          col_xs={3}
          col_md={3}
          col_lg={2}
        />
        <InputDataAdornments
          name_id="vlrUntProdutoSelecionadoPedido"
          descLabel="Valor unitário"
          type="numeric"
          patternNumber="[0-9]*"
          positionStartAdornment={
            <InputAdornment position="start">R$</InputAdornment>
          }
          col_xs={3}
          col_md={3}
          col_lg={3}
        />
        <InputDataAdornments
          name_id="vlrDescontoProdutoSelecionadoPedido"
          descLabel="Desconto"
          type="numeric"
          patternNumber="[0-9]*"
          positionStartAdornment={
            <InputAdornment position="start">R$</InputAdornment>
          }
          col_xs={3}
          col_md={3}
          col_lg={2}
        />
        <InputDataAdornments
          name_id="vlrTotalProdutoSelecionadoPedido"
          descLabel="Total"
          type="numeric"
          patternNumber="[0-9]*"
          positionStartAdornment={
            <InputAdornment position="start">R$</InputAdornment>
          }
          col_xs={3}
          col_md={3}
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
      </Grid>
    </Box>
  );
};
