import NextLink from "next/link";
// MATERIAL UI
import Grid from "@mui/material/Unstable_Grid2";
// COMPONENTS
import PageContentTitle from "./PageContentTitle";
// ICONS
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { Button } from "@mui/material";

interface TitleAndButtonProps {
  tipoButton?: "text" | "contained" | "outlined";
  title: string;
  descButton?: string;
  hrefTo?: string;
  colorButton?: "inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning";
  startIcon?: React.ReactNode;
  onClick?: any;
}

const TitleAndButton = (props: TitleAndButtonProps) => {
  return (
    <Grid container alignItems="center" my={{ xs: 0, sm: 3 }} >
      <PageContentTitle title={props.title} />
      <Grid sm={2} md={2}>
        <Button
          fullWidth
          component={props.hrefTo ? NextLink : Button}
          href={props.hrefTo}
          onClick={props.onClick}
          variant={props.tipoButton ?? "contained"}
          color={props.colorButton}
          startIcon={props.startIcon ?? <AddRoundedIcon />}
          sx={{ mb: { xs: 4, sm: 0 }, mt: { xs: 4, sm: 0 } }}
        >
          {props.descButton ?? "Novo"}
        </Button>
      </Grid>
    </Grid>
  );
};

export default TitleAndButton;
