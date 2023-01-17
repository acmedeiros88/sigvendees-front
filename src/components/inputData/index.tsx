import Grid from "@mui/material/Unstable_Grid2";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import {
  TextField,
  Autocomplete,
  Button,
  Stack,
  FormControl,
  InputLabel,
  OutlinedInput,
  SxProps,
  Theme,
} from "@mui/material";

type Option = {
  readonly label: string;
  readonly value: string | number;
};

interface InputProps {
  name_id?: string;
  descLabel: string;
  descPlaceholder?: string;
  col_xs: number;
  col_md: number;
  col_lg: number;
  col_xl?: number;
  read_only?: boolean;
}

interface InputDataProps extends InputProps {
  type?: "text" | "email" | "tel" | "url" | "numeric" | "decimal";
  patternNumber?: "[0-9]*";
}

interface InputDateProps extends InputProps {
  value: Date | null;
  handleChange(newValue: Date | null): void;
}

interface InputSelectProps extends InputProps {
  isLoading?: boolean;
  options: readonly Option[];
}

interface InputTextareaProps extends InputProps {}

interface InputDataAdornmentsProps extends InputDataProps {
  positionStartAdornment?: React.ReactNode;
  positionEndAdornment?: React.ReactNode;
}

interface ButtonContainedProps extends InputProps {
  style?: SxProps<Theme>;
  container_style?: SxProps<Theme>;
}

interface ButtonSubmitCancelProps {
  idSalvar?: string;
  idCancelar?: string;
}

const InputData = (props: InputDataProps) => (
  <Grid xs={props.col_xs} md={props.col_md} lg={props.col_lg}>
    <TextField
      fullWidth
      id={props.name_id}
      name={props.name_id}
      label={props.descLabel}
      placeholder={props.descPlaceholder}
      InputLabelProps={{
        shrink: true,
      }}
      inputProps={{
        inputMode: props.type,
        pattern: props.patternNumber,
        readOnly: props.read_only,
      }}
    />
  </Grid>
);

const InputDate = (props: InputDateProps) => (
  <Grid xs={props.col_xs} md={props.col_md} lg={props.col_lg}>
    <DesktopDatePicker
      label={props.descLabel}
      inputFormat="dd/MM/yyyy"
      readOnly={props.read_only}
      value={props.value}
      onChange={props.handleChange}
      InputProps={{
        id: props.name_id,
        name: props.name_id,
      }}
      renderInput={(params) => (
        <TextField {...params} InputLabelProps={{ shrink: true }} />
      )}
    />
  </Grid>
);

const InputSelect = (props: InputSelectProps) => (
  <Grid xs={props.col_xs} md={props.col_md} lg={props.col_lg}>
    <Autocomplete
      disablePortal
      id={props.name_id}
      options={props.options}
      loading={props.isLoading}
      renderInput={(params) => (
        <TextField
          {...params}
          label={props.descLabel}
          placeholder={
            props.descPlaceholder != null
              ? props.descPlaceholder
              : "Selecionar..."
          }
          InputLabelProps={{ shrink: true }}
        />
      )}
    />
  </Grid>
);

const InputTextarea = (props: InputTextareaProps) => (
  <Grid xs={props.col_xs} md={props.col_md} lg={props.col_lg}>
    <TextField
      fullWidth
      multiline
      id={props.name_id}
      name={props.name_id}
      label={props.descLabel}
      placeholder={props.descPlaceholder}
      rows={4}
      InputLabelProps={{
        shrink: true,
      }}
    />
  </Grid>
);

const InputDataAdornments = (props: InputDataAdornmentsProps) => (
  <Grid xs={props.col_xs} md={props.col_md} lg={props.col_lg}>
    <FormControl fullWidth>
      <InputLabel htmlFor={props.name_id} shrink>
        {props.descLabel}
      </InputLabel>
      <OutlinedInput
        id={props.name_id}
        name={props.name_id}
        label={props.descLabel}
        placeholder={props.descPlaceholder}
        startAdornment={props.positionStartAdornment}
        endAdornment={props.positionEndAdornment}
        readOnly={props.read_only}
        inputProps={{
          inputMode: props.type,
          pattern: props.patternNumber,
        }}
      />
    </FormControl>
  </Grid>
);

const ButtonContained = (props: ButtonContainedProps) => (
  <Grid
    xs={props.col_xs}
    md={props.col_md}
    lg={props.col_lg}
    sx={props.container_style}
  >
    <Button id={props.name_id} sx={props.style} variant="contained">
      {props.descLabel}
    </Button>
  </Grid>
);

const ButtonSubmitCancel = (props: ButtonSubmitCancelProps) => (
  <Stack spacing={2} direction="row">
    <Button id={props.idSalvar} variant="contained">
      Salvar
    </Button>
    <Button id={props.idCancelar} variant="contained">
      Cancelar
    </Button>
  </Stack>
);

export {
  InputData,
  InputDate,
  InputSelect,
  InputTextarea,
  ButtonSubmitCancel,
  ButtonContained,
  InputDataAdornments,
};
