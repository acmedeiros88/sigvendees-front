import React, { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
// MATERIAL UI
import Grid from "@mui/material/Unstable_Grid2";
import { InputAdornment, Card, CardContent, CardActions } from "@mui/material";
// COMPONENTS
import {
  InputData,
  InputAutocomplete,
  ButtonContained,
  ButtonsSubmitCancel,
  InputDataAdornments,
} from "../../inputData";
import TableItens from "./TableItens";
import TitleAndButton from "../../TitleAndButton";
// ICONS
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
// MOCKS
import { ROWS as INGREDIENTES_EMBALAGENS } from "../../../__mocks/ingredientesEmbalagensDataGrid";

const FormEntrada = ({ titulo }: { titulo: string }) => {
  const router = useRouter();

  const handleCancelar = useCallback(() => {
    //formik.resetForm();
    router.back();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <form autoComplete="off">

      <TitleAndButton
        colorButton="info"
        title={titulo}
        tipoButton="text"
        descButton="Estoque"
        onClick={() => router.replace("/estoques")}
        startIcon={<KeyboardBackspaceIcon />}
      />

      <Card>
        <CardContent component={Grid} container spacing={3}>
          <InputAutocomplete
            name_id="listaProdutosEntrada"
            descLabel="Produto"
            options={INGREDIENTES_EMBALAGENS}
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
            <TableItens rows={INGREDIENTES_EMBALAGENS} />
          </Grid>
        </CardContent>

        <CardActions sx={{ justifyContent: "center", pb: 2.5 }}>
          <ButtonsSubmitCancel onClickCancelar={handleCancelar} />
        </CardActions>
      </Card>
    </form>
  );
};

export default FormEntrada;
