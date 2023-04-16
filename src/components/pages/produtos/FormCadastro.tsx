import React, { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
// MATERIAL UI
import Grid from "@mui/material/Unstable_Grid2";
import { Card, CardContent, CardActions, InputAdornment } from "@mui/material";
// COMPONENTS
import {
  InputData,
  InputSelect,
  ButtonContained,
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
import { ROWS as EMBALAGENS } from "../../../__mocks/ingredientesEmbalagensDataGrid";
import TableItens from "../ingredientes-embalagens/TableItens";

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
            descLabel="Venda em"
            col_xs={12}
            col_sm={6}
            options={OptionVenda}
          />
          <InputData
            name_id="nome"
            descLabel="Nome"
            col_xs={12}
            col_sm={9}
            col_md={9}
          />
          <InputDataAdornments
            read_only
            name_id="preco"
            descLabel="Valor de venda"
            type="number"
            input_props={{ inputMode: "numeric", pattern: "[0-9]*", min: 1 }}
            positionStartAdornment={
              <InputAdornment position="start">R$</InputAdornment>
            }
            col_xs={12}
            col_sm={3}
            col_md={3}
          />
          <InputAutocomplete
            name_id="receitas"
            descLabel="Receitas"
            options={RECEITAS}
            getOptionLabel={(option) => option.nome}
            col_xs={12}
          />
          <InputAutocomplete
            name_id="embalagens"
            descLabel="Embalagens"
            options={EMBALAGENS}
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
            <TableItens rows={EMBALAGENS} />
          </Grid>
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
