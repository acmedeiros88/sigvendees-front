import React, { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
// MATERIAL UI
import Grid from "@mui/material/Unstable_Grid2";
import { Card, CardActions, CardContent, InputAdornment, Select, MenuItem, Typography } from "@mui/material";
// COMPONENTS
import {
  InputData,
  InputSelect,
  InputAutocomplete,
  ButtonContained,
  InputDataAdornments,
  ButtonsSubmitCancel,
  Option
} from "../../inputData";
import TableItens from "./TableItens";
import PageContentTitle from "../../PageContentTitle";
// ICONS
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
// MOCKS
import { ROWS as PRODUTOS_PEDIDO } from "../../../__mocks/produtos";

const OptionFormaPagamento: Array<Option> = [
  { value: 0, label: "Dinheiro à Vista" },
  { value: 1, label: "Cartão de Débito" },
  { value: 2, label: "Cartão de Crédito" },
];

function TipoDesconto() {
  return (
    <Select autoWidth variant="standard" disableUnderline>
      <MenuItem value={0}>R$</MenuItem>
      <MenuItem value={1}>%</MenuItem>
    </Select>
  );
}

const FormCadastro = ({ titulo }: { titulo: string }) => {
  const router = useRouter();

  const [dataEntrega, setDataEntrega] = useState<Date | null>(null);

  const handleCancelar = useCallback(() => {
    //formik.resetForm();
    router.back();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <form autoComplete="off">

      <Grid container alignItems="center" my={{ xs: 0, sm: 3 }} >
        <PageContentTitle title={titulo} />
      </Grid>

      <Card>
        <CardContent component={Grid} container display="flex" justifyContent="center" spacing={3}>
          <InputData
            name_id="cliente"
            descLabel="Cliente"
            col_xs={12}
          />
          <InputSelect
            name_id="tipoPagamento"
            descLabel="Forma de pagamento"
            col_xs={12}
            col_sm={12}
            col_md={4}
            options={OptionFormaPagamento}
          />
          <InputDataAdornments
            name_id="total_pago"
            descLabel="Total pago"
            type="number"
            input_props={{ inputMode: "numeric", pattern: "[0-9]*", min: 1 }}
            positionStartAdornment={
              <InputAdornment position="start">R$</InputAdornment>
            }
            col_xs={12}
            col_sm={6}
            col_md={4}
          />
          <InputDataAdornments
            name_id="desconto"
            descLabel="Desconto"
            type="number"
            input_props={{ inputMode: "numeric", pattern: "[0-9]*", min: 1 }}
            positionStartAdornment={
              <InputAdornment position="start"><TipoDesconto /></InputAdornment>
            }
            col_xs={12}
            col_sm={6}
            col_md={4}
          />
          <InputDataAdornments
            name_id="subtotal"
            descLabel="Subtotal"
            type="number"
            input_props={{ inputMode: "numeric", pattern: "[0-9]*", min: 1 }}
            positionStartAdornment={
              <InputAdornment position="start">R$</InputAdornment>
            }
            col_xs={12}
            col_sm={4}
            col_md={4}
          />
          <InputDataAdornments
            name_id="descontos"
            descLabel="Descontos"
            type="number"
            input_props={{ inputMode: "numeric", pattern: "[0-9]*", min: 1 }}
            positionStartAdornment={
              <InputAdornment position="start">R$</InputAdornment>
            }
            col_xs={12}
            col_sm={4}
            col_md={4}
          />
          <InputDataAdornments
            name_id="troco"
            descLabel="Troco"
            type="number"
            input_props={{ inputMode: "numeric", pattern: "[0-9]*", min: 1 }}
            positionStartAdornment={
              <InputAdornment position="start">R$</InputAdornment>
            }
            col_xs={12}
            col_sm={4}
            col_md={4}
          />
          <InputDataAdornments
            name_id="total"
            descLabel="Total a pagar"
            type="number"
            input_props={{ inputMode: "numeric", pattern: "[0-9]*", min: 1 }}
            positionStartAdornment={
              <InputAdornment position="start">R$</InputAdornment>
            }
            col_xs={12}
            col_sm={6}
            col_md={6}
          />
          <Grid xs={12}>
            <Typography color="neutral.600" variant="subtitle2">Itens da venda</Typography>
            <TableItens rows={PRODUTOS_PEDIDO} />
          </Grid>
        </CardContent>

        <CardActions sx={{ justifyContent: "center", pb: 2.5 }}>
          <ButtonsSubmitCancel descOK="Finalizar" onClickCancelar={handleCancelar} />
        </CardActions>
      </Card>
    </form>
  );
};

export default FormCadastro;
