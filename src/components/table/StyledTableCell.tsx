// MATERIAL UI
import { styled } from "@mui/material/styles";
import { TableCell, tableCellClasses } from "@mui/material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.neutral[800],
    color: theme.palette.neutral[100],
  },
}));

export default StyledTableCell;
