import React, { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
// MATERIAL UI
import Grid from "@mui/material/Unstable_Grid2";
import { Card, CardContent, CardActions } from "@mui/material";
// COMPONENTS
import {
  InputData,
  InputSelect,
  ButtonsSubmitCancel,
  Option,
} from "../../inputData";
import TitleAndButton from "../../TitleAndButton";
// ICONS
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

const OptionTipoProduto: Array<Option> = [
  { value: 0, label: "INGREDIENTE" },
  { value: 1, label: "EMPABALGEM" },
];

const OptionUndMedida: Array<Option> = [
  { value: 0, label: "Unidade (und)" },
  { value: 1, label: "Gramas (g)" },
  { value: 2, label: "Mililitros (ml)" },
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
        descButton="Voltar"
        onClick={() => router.replace("/ingredientes-embalagens")}
        startIcon={<KeyboardBackspaceIcon />}
      />

      <Card>
        <CardContent component={Grid} container display="flex" justifyContent="center" spacing={3}>
          <InputSelect
            name_id="tipoProduto"
            descLabel="Tipo"
            col_xs={12}
            col_md={6}
            options={OptionTipoProduto}
          />
          <InputData
            name_id="nome"
            descLabel="Nome"
            col_xs={12}
            col_md={12}
          />
          <InputSelect
            name_id="undMedidaProduto"
            descLabel="Unidade de medidas"
            col_xs={12}
            col_sm={6}
            options={OptionUndMedida}
          />
          <InputData
            name_id="qtdMinimaEmEstoque"
            descLabel="Estoque mínimo"
            type="number"
            input_props={{ inputMode: "numeric", pattern: "[0-9]*", min: 1 }}
            col_xs={12}
            col_sm={6}
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
