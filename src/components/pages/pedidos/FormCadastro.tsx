import React, { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
// MATERIAL UI
import Grid from "@mui/material/Unstable_Grid2";
import { Card, CardActions, CardContent, InputAdornment } from "@mui/material";
// COMPONENTS
import {
  InputData,
  InputDate,
  InputAutocomplete,
  ButtonContained,
  InputDataAdornments,
  ButtonsSubmitCancel,
} from "../../inputData";
import TableItens from "./TableItens";
import TitleAndButton from "../../TitleAndButton";
// ICONS
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
// MOCKS
import { ROWS as PRODUTOS_PEDIDO } from "../../../__mocks/produtos";

const FormCadastro = ({ titulo }: { titulo: string }) => {
  const router = useRouter();

  const [dataEntrega, setDataEntrega] = useState<Date | null>(null);

  const handleCancelar = useCallback(() => {
    //formik.resetForm();
    router.back();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const handleChangeData = (newValue: Date | null) => {
    setDataEntrega(newValue);
    console.log("DATA SELECIONADA " + dataEntrega);
  };

  return (
    <form autoComplete="off">

      <TitleAndButton
        colorButton="info"
        title={titulo}
        tipoButton="text"
        descButton="Pedidos"
        onClick={() => router.replace("/pedidos")}
        startIcon={<KeyboardBackspaceIcon />}
      />
      
      <Card>
        <CardContent component={Grid} container spacing={3}>
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
            date={dataEntrega}
            setDate={setDataEntrega}
            col_xs={12}
            col_md={12}
            col_lg={3}
          />
          <InputAutocomplete
            name_id="listaProdutosPedido"
            descLabel="Produto"
            options={PRODUTOS_PEDIDO}
            getOptionLabel={(option) => option.nome}
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
            container_style={{ alignSelf: "center" }}
            col_xs={12}
            col_sm={3}
            col_md={2}
            col_lg={2}
          />
          <Grid xs={12} md={12} lg={12}>
            <TableItens rows={PRODUTOS_PEDIDO} />
          </Grid>
        </CardContent>

        <CardActions sx={{ justifyContent: "center", pb: 2.5 }}>
          <ButtonsSubmitCancel onClickCancelar={handleCancelar} />
        </CardActions>
      </Card>
    </form>
  );
};

export default FormCadastro;
