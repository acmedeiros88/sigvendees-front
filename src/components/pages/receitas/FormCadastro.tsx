import React, { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
// MATERIAL UI
import Grid from "@mui/material/Unstable_Grid2";
import { Card, CardContent, CardActions, InputAdornment } from "@mui/material";
// COMPONENTS
import {
  InputData,
  ButtonsSubmitCancel,
  InputAutocomplete,
  ButtonContained,
  InputDataAdornments
} from "../../inputData";
import TableItens from "../ingredientes-embalagens/TableItens";
import TitleAndButton from "../../TitleAndButton";
// ICONS
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
// MOCKS
import { ROWS as INGREDIENTES } from "../../../__mocks/ingredientesEmbalagensDataGrid";

const FormCadastro = ({ titulo }: { titulo: string }) => {
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
        descButton="Receitas"
        onClick={() => router.replace("/receitas")}
        startIcon={<KeyboardBackspaceIcon />}
      />

      <Card>
        <CardContent component={Grid} container spacing={3}>
          <InputData
            name_id="nome"
            descLabel="Nome"
            col_xs={12}
            col_md={12}
            col_lg={6}
          />
          <InputData
            name_id="rendimento"
            descLabel="Rendimento"
            type="number"
            input_props={{ inputMode: "numeric", pattern: "[0-9]*", min: 1 }}
            col_xs={12}
            col_md={6}
            col_lg={3}
          />
          <InputData
            name_id="tempo_preparo"
            descLabel="Tempo preparo"
            descPlaceholder="minutos"
            type="number"
            input_props={{ inputMode: "numeric", pattern: "[0-9]*", min: 1 }}
            col_xs={12}
            col_md={6}
            col_lg={3}
          />
          <InputAutocomplete
            name_id="ingredientes"
            descLabel="Ingredientes"
            options={INGREDIENTES}
            getOptionLabel={(option) => option.nome}
            col_xs={12}
            col_md={12}
            col_lg={6}
          />
          <InputData
            name_id="quantidade"
            descLabel="Quantidade"
            type="number"
            input_props={{ inputMode: "numeric", pattern: "[0-9]*", min: 1 }}
            col_xs={12}
            col_sm={8}
            col_md={6}
            col_lg={3}
          />
          <ButtonContained
            descLabel="Adicionar"
            container_style={{ alignSelf: "center" }}
            col_xs={12}
            col_sm={4}
            col_md={3}
            col_lg={3}
          />
          <Grid xs={12} md={12} lg={12}>
            <TableItens rows={INGREDIENTES} />
          </Grid>

          <InputDataAdornments
            read_only
            name_id="custo"
            descLabel="Custos com ingredientes"
            type="number"
            input_props={{ inputMode: "numeric", pattern: "[0-9]*", min: 1 }}
            positionStartAdornment={
              <InputAdornment position="start">R$</InputAdornment>
            }
            col_xs={12}
            col_sm={6}
            col_md={4}
            col_lg={4}
          />
          <InputDataAdornments
            read_only
            name_id="custo_fixo"
            descLabel="Custo fixo"
            type="number"
            input_props={{ inputMode: "numeric", pattern: "[0-9]*", min: 1 }}
            positionStartAdornment={
              <InputAdornment position="start">R$</InputAdornment>
            }
            col_xs={12}
            col_sm={6}
            col_md={4}
            col_lg={4}
          />
          <InputDataAdornments
            read_only
            name_id="custo_total"
            descLabel="Custos total"
            type="number"
            input_props={{ inputMode: "numeric", pattern: "[0-9]*", min: 1 }}
            positionStartAdornment={
              <InputAdornment position="start">R$</InputAdornment>
            }
            col_xs={12}
            col_sm={6}
            col_md={4}
            col_lg={4}
          />
        </CardContent>

        <CardActions sx={{ justifyContent: "center", pb: 2.5 }}>
          <ButtonsSubmitCancel onClickCancelar={handleCancelar} />
        </CardActions>
      </Card>
    </form>
  );
};

export default FormCadastro;
