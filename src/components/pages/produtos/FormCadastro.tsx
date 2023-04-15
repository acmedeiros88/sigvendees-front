import React, { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
// MATERIAL UI
import Grid from "@mui/material/Unstable_Grid2";
import { Card, CardContent, CardActions, InputAdornment } from "@mui/material";
// COMPONENTS
import {
  InputData,
  InputSelect,
  ButtonsSubmitCancel,
  InputDataAdornments,
  InputAutocomplete,
  Option,
} from "../../inputData";
import TitleAndButton from "../../TitleAndButton";
// ICONS
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
// MOCKS
import { ROWS as RECEITAS } from "../../../__mocks/receitasDataGrid";

const OptionTipo: Array<Option> = [
  { value: 0, label: 'DOCE' },
  { value: 1, label: 'SALGADO' }
];

const OptionVenda: Array<Option> = [
  { value: 0, label: "Unidade (und)" },
  { value: 1, label: "Gramas (g)" },
  { value: 2, label: "Cento (100)" },
];

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
        descButton="Produtos"
        onClick={() => router.replace("/produtos")}
        startIcon={<KeyboardBackspaceIcon />}
      />

      <Card>
        <CardContent component={Grid} container display="flex" justifyContent="center" spacing={3}>
          <InputSelect
            name_id="tipoProduto"
            descLabel="Tipo"
            col_xs={12}
            col_sm={6}
            options={OptionTipo}
          />
          <InputSelect
            name_id="venda_em"
            descLabel="Venda"
            col_xs={12}
            col_sm={6}
            options={OptionVenda}
          />
          <InputData
            name_id="nome"
            descLabel="Nome"
            col_xs={12}
          />
          <InputAutocomplete
            name_id="receitas"
            descLabel="Receitas"
            options={RECEITAS}
            getOptionLabel={(option) => option.nome}
            col_xs={12}
          />
          <InputDataAdornments
            name_id="vlr_venda"
            descLabel="Preço"
            type="number"
            input_props={{ inputMode: "numeric", pattern: "[0-9]*", min: 1 }}
            positionStartAdornment={
              <InputAdornment position="start">R$</InputAdornment>
            }
            col_xs={12}
            col_sm={6}
            col_md={6}
          />
          <InputDataAdornments
            read_only
            name_id="lucro"
            descLabel="Lucro"
            type="number"
            input_props={{ inputMode: "numeric", pattern: "[0-9]*", min: 1 }}
            positionStartAdornment={
              <InputAdornment position="start">R$</InputAdornment>
            }
            col_xs={12}
            col_sm={6}
            col_md={6}
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
