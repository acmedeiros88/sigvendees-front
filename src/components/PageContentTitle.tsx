// MATERIAL UI
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

const PageContentTitle = ({ title }: { title: string }) => {
  return (
    <Grid xs={12} sm={10} md={10}>
      <Box>
        <Typography variant="h4" color="neutral.600" mb={1}>
          {title}
        </Typography>
      </Box>
    </Grid>
  );
};

export default PageContentTitle;
