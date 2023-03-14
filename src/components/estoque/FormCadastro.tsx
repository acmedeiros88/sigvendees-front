// MUI CORE
import Grid from "@mui/material/Unstable_Grid2";
import { Box } from "@mui/material";
// COMPONENTS
import {
  InputData,
  InputSelect,
  ButtonsSubmitCancel,
  Option,
} from "../inputData";

const OptionTipoProduto: Array<Option> = [
  { value: 0, label: "INGREDIENTE" },
  { value: 1, label: "EMPABALGEM" },
];

const OptionUndMedida: Array<Option> = [
  { value: 0, label: "Unidade (und)" },
  { value: 1, label: "Gramas (g)" },
  { value: 2, label: "Mililitros (ml)" },
];

const FormCadastro = () => {
  return (
    <Box component="form">
      <Grid container spacing={3}>
        <InputData
          name_id="nomeIngrediente"
          descLabel="Nome"
          col_xs={12}
          col_md={12}
          col_lg={12}
        />
        <InputSelect
          name_id="tipoProduto"
          descLabel="Tipo"
          col_xs={12}
          col_sm={4}
          col_md={4}
          col_lg={4}
          options={OptionTipoProduto}
        />
        <InputSelect
          name_id="undMedidaProduto"
          descLabel="Unidade de medidas"
          col_xs={12}
          col_sm={4}
          col_md={4}
          col_lg={4}
          options={OptionUndMedida}
        />
        <InputData
          name_id="qtdMinimaEmEstoque"
          descLabel="Estoque mínimo"
          type="number"
          input_props={{ inputMode: "numeric", pattern: "[0-9]*", min: 1 }}
          col_xs={12}
          col_sm={4}
          col_md={4}
          col_lg={4}
        />
        <ButtonsSubmitCancel />
      </Grid>
    </Box>
  );
};

export default FormCadastro;
