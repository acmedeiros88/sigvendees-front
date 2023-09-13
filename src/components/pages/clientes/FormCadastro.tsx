import React, { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useFetch } from "../../../hooks/useFetch";
// MATERIAL UI
import Grid from "@mui/material/Unstable_Grid2";
import { Card, CardContent, CardActions } from "@mui/material";
// COMPONENTS
import {
  InputData,
  InputSelect,
  ButtonsSubmitCancel,
  Option,
  InputTextarea,
} from "../../inputData";
import TitleAndButton from "../../TitleAndButton";
// ICONS
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

const OptionCidades: Array<Option> = [
  { value: 0, label: 'Foz do Iguaçu' },
  { value: 1, label: 'Medianeira' },
  { value: 2, label: 'Cascavel' }
];

const OptionEstados: Array<Option> = [
  { value: 0, label: 'Paraná' },
  { value: 1, label: 'Santa Catarina' },
  { value: 2, label: 'Rio Grande do Sul' }
];

export function FormCadastro({ titulo }: { titulo: string }) {
  const { data: cliente } = useFetch<any>("https://api/clientes");
  const router = useRouter();
  const { id } = router.query;

  const handleCancelar = useCallback(() => {
    //formik.resetForm();
    router.back();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // useEffect(() => {
  //   if (id) {

  //   }
  // }, []);

  return (
    <form autoComplete="off">

      <TitleAndButton
        colorButton="info"
        title={titulo}
        tipoButton="text"
        descButton="Clientes"
        onClick={() => router.replace("/clientes")}
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
            name_id="telefone"
            descLabel="Telefone"
            col_xs={12}
            col_md={12}
            col_lg={2}
          />
          <InputData
            name_id="email"
            descLabel="Email"
            col_xs={12}
            col_md={12}
            col_lg={4}
          />
          <InputData
            name_id="endereco"
            descLabel="Endereço"
            col_xs={12}
            col_md={12}
            col_lg={6}
          />
          <InputData
            name_id="bairro"
            descLabel="Bairro"
            col_xs={12}
            col_md={12}
            col_lg={4}
          />
          <InputData
            name_id="cep"
            descLabel="CEP"
            type="number"
            input_props={{ inputMode: "numeric", pattern: "[0-9]*", min: 1 }}
            col_xs={12}
            col_md={2}
            col_lg={2}
          />
          <InputData
            name_id="complemento"
            descLabel="Complemento"
            col_xs={12}
            col_md={10}
            col_lg={12}
          />
          <InputSelect
            name_id="estado"
            descLabel="Estado"
            col_xs={12}
            col_sm={6}
            options={OptionEstados}
          />
          <InputSelect
            name_id="cidade"
            descLabel="Cidades"
            col_xs={12}
            col_sm={6}
            options={OptionCidades}
          />
          <InputTextarea
            name_id="observacao"
            descLabel="Observação"
            col_xs={12}
          />
        </CardContent>

        <CardActions sx={{ justifyContent: "center", pb: 2.5 }}>
          <ButtonsSubmitCancel onClickCancelar={handleCancelar} />
        </CardActions>
      </Card>
    </form>
  );
}
