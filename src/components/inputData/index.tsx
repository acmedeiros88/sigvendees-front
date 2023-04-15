// MUI X
import {
  DatePicker,
  DateTimePicker,
  MobileDateTimePicker,
} from "@mui/x-date-pickers";
// MATERIAL UI
import Grid from "@mui/material/Unstable_Grid2";
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
  MenuItem,
  Typography,
  CircularProgress,
  Box,
} from "@mui/material";

export type Option = {
  readonly label: string;
  readonly value: string | number;
};

interface InputProps {
  name_id?: string;
  descLabel?: string;
  descPlaceholder?: string;
  col_xs?: number;
  col_sm?: number;
  col_md?: number;
  col_lg?: number;
  col_xl?: number;
  read_only?: boolean;
  disabled?: boolean;
  value?: any;
  error?: boolean;
  helperText?: React.ReactNode;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
}

interface InputDataProps extends InputProps {
  type?: string;
  input_props?: any;
}

interface InputDateProps extends InputProps {
  date?: Date | null;
  setDate?(newValue: Date | null): void;
}

interface InputAutocompleteProps extends InputProps {
  isLoading?: boolean;
  multiple?: boolean;
  options: readonly any[];
  getOptionLabel?: (option: any) => string;
}

interface InputTextareaProps extends InputProps {
  qtd_row?: number;
}

interface InputSelectProps extends InputDataProps {
  options: readonly Option[];
}

interface InputDataAdornmentsProps extends InputDataProps {
  positionStartAdornment?: React.ReactNode;
  positionEndAdornment?: React.ReactNode;
}

interface ButtonContainedProps extends InputProps {
  style?: SxProps<Theme>;
  container_style?: SxProps<Theme>;
  component?: any;
  href?: string;
  startIcon?: React.ReactNode;
  disabled?: boolean;
  onClick?: any;
  loading?: boolean;
}

interface ButtonSubmitCancelProps extends ButtonContainedProps {
  idSalvar?: string;
  idCancelar?: string;
  descOK?: string;
  startIconCancelar?: React.ReactNode;
  disabledCancelar?: boolean;
  onClickCancelar?: any;
}

const InputData = (props: InputDataProps) => (
  <Grid xs={props.col_xs} sm={props.col_sm} md={props.col_md} lg={props.col_lg}>
    <TextField
      fullWidth
      id={props.name_id}
      name={props.name_id}
      label={props.descLabel}
      placeholder={props.descPlaceholder}
      type={props.type}
      disabled={props.disabled}
      value={props.value}
      onChange={props.onChange}
      error={props.error}
      helperText={props.helperText}
      InputLabelProps={{
        shrink: true,
      }}
      inputProps={{
        readOnly: props.read_only,
        ...props.input_props,
      }}
    />
  </Grid>
);

const InputDate = (props: InputDateProps) => (
  <Grid
    xs={props.col_xs}
    sm={props.col_sm}
    md={props.col_md}
    lg={props.col_lg}
    xl={props.col_xl}
  >
    <DatePicker
      label={props.descLabel}
      //format="dd/MM/yyyy"
      readOnly={props.read_only}
      //value={props.value}
      //onChange={(newValue) => props.setValue(newValue)}
      slotProps={{
        textField: {
          InputLabelProps: { shrink: true },
          inputProps: { id: props.name_id, name: props.name_id },
        },
      }}
    />
  </Grid>
);

const InputDateTime = (props: InputDateProps) => (
  <Grid xs={props.col_xs} sm={props.col_sm} md={props.col_md} lg={props.col_lg}>
    <DateTimePicker
      label={props.descLabel}
      //format="dd/MM/yyyy"
      readOnly={props.read_only}
      //value={props.value}
      //onChange={(newValue) => props.setValue(newValue)}
      slotProps={{
        textField: {
          InputLabelProps: { shrink: true },
          inputProps: { id: props.name_id, name: props.name_id },
        },
      }}
    />
  </Grid>
);

const InputMobileDateTime = (props: InputDateProps) => (
  <Grid xs={props.col_xs} sm={props.col_sm} md={props.col_md} lg={props.col_lg}>
    <MobileDateTimePicker
      label={props.descLabel}
      //format="dd/MM/yyyy"
      readOnly={props.read_only}
      //value={props.value}
      //onChange={(newValue) => props.setValue(newValue)}
      slotProps={{
        textField: {
          InputLabelProps: { shrink: true },
          inputProps: { id: props.name_id, name: props.name_id },
        },
      }}
    />
  </Grid>
);

const InputAutocomplete = (props: InputAutocompleteProps) => (
  <Grid xs={props.col_xs} sm={props.col_sm} md={props.col_md} lg={props.col_lg}>
    <Autocomplete
      disablePortal
      disabled={props.disabled}
      multiple={props.multiple}
      id={props.name_id}
      options={props.options}
      getOptionLabel={props.getOptionLabel}
      loading={props.isLoading}
      renderInput={(params) => (
        <TextField
          {...params}
          label={props.descLabel}
          placeholder={props.descPlaceholder ?? "Selecionar..."}
          InputLabelProps={{ shrink: true }}
        />
      )}
    />
  </Grid>
);

const InputTextarea = (props: InputTextareaProps) => (
  <Grid xs={props.col_xs} sm={props.col_sm} md={props.col_md} lg={props.col_lg}>
    <TextField
      fullWidth
      multiline
      id={props.name_id}
      name={props.name_id}
      label={props.descLabel}
      placeholder={props.descPlaceholder}
      rows={props.qtd_row ?? 4}
      InputLabelProps={{
        shrink: true,
      }}
    />
  </Grid>
);

const InputDataAdornments = (props: InputDataAdornmentsProps) => (
  <Grid xs={props.col_xs} sm={props.col_sm} md={props.col_md} lg={props.col_lg}>
    <FormControl fullWidth>
      <InputLabel htmlFor={props.name_id} shrink>
        {props.descLabel}
      </InputLabel>
      <OutlinedInput
        id={props.name_id}
        name={props.name_id}
        label={props.descLabel}
        placeholder={props.descPlaceholder}
        type={props.type}
        startAdornment={props.positionStartAdornment}
        endAdornment={props.positionEndAdornment}
        readOnly={props.read_only}
        inputProps={{ ...props.input_props }}
      />
    </FormControl>
  </Grid>
);

const InputSelect = (props: InputSelectProps) => (
  <Grid xs={props.col_xs} sm={props.col_sm} md={props.col_md} lg={props.col_lg}>
    <TextField
      fullWidth
      select
      id={props.name_id}
      name={props.name_id}
      label={props.descLabel}
      disabled={props.disabled}
      defaultValue={-1}
      value={props.value}
      onChange={props.onChange}
      sx={{ textAlign: "start" }}
      InputLabelProps={{
        shrink: true,
      }}
      inputProps={{
        readOnly: props.read_only,
        ...props.input_props,
      }}
    >
      <MenuItem disabled value={-1}>
        <Typography variant="inherit" color="action.disabled">
          {props.descPlaceholder ?? "Selecionar..."}
        </Typography>
      </MenuItem>
      {props.options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  </Grid>
);

const ButtonContained = (props: ButtonContainedProps) => (
  <Grid
    xs={props.col_xs}
    sm={props.col_sm}
    md={props.col_md}
    lg={props.col_lg}
    xl={props.col_xl}
    sx={props.container_style}
  >
    <Button
      fullWidth
      variant="contained"
      id={props.name_id}
      component={props.component}
      href={props.href}
      startIcon={props.startIcon}
      disabled={props.disabled}
      onClick={props.onClick}
      sx={props.style}
    >
      {props.descLabel}
    </Button>
  </Grid>
);

const ButtonsSubmitCancel = (props: ButtonSubmitCancelProps) => (
  <Stack spacing={2} direction="row" sx={props.container_style}>
    <Button
      fullWidth
      id={props.idCancelar}
      variant="outlined"
      disabled={props.disabledCancelar || props.loading}
      onClick={props.onClickCancelar}
    >
      Cancelar
    </Button>

    {props.loading ? (
      <Button fullWidth variant="contained" disabled={true}>
        <CircularProgress
          size={24}
          sx={{
            position: "absolute",
          }}
        />
        <span>Aguarde...</span>
      </Button>
    ) : (
      <Button
        fullWidth
        id={props.idSalvar}
        variant="contained"
        type="submit"
        disabled={props.disabled || props.loading}
        onClick={props.onClick}
      >
        {props.descOK ?? "Salvar"}
      </Button>
    )}
  </Stack>
);

export {
  InputData,
  InputDate,
  InputDateTime,
  InputMobileDateTime,
  InputAutocomplete,
  InputTextarea,
  ButtonsSubmitCancel,
  ButtonContained,
  InputDataAdornments,
  InputSelect,
};
