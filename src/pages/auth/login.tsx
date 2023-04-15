// Material UI
import Grid from "@mui/material/Unstable_Grid2";
import {
  Stack,
  Typography,
  Card,
  CardContent,
  Box,
} from "@mui/material";
// COMPONENTS
import FormAuth from "../../components/auth/FormAuth";
import AuthFooter from "../../components/auth/AuthFooter";

const Login = () => {
  return (
    <Box sx={{ backgroundColor: "#E2E2E2", minHeight: "100vh" }}>
      <Grid container>
        <Grid xs={12}>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            sx={{ minHeight: "calc(100vh - 68px)" }}
          >
            <Grid>
              <Card
                sx={{
                  border: "1px solid",
                  borderColor: "#E5E7EB",
                  ":hover": { boxShadow: "0 2px 14px 0 rgb(32 40 45 / 8%)" },
                  maxWidth: { xs: 400, lg: 475 },
                }}
              >
                <CardContent>
                  <Box sx={{ p: { xs: 2, sm: 3, xl: 5 } }}>
                    <Grid container>
                      <Grid sx={{ mb: 3 }}>
                        {/* <Logo /> */}
                      </Grid>
                      <Grid xs={12}>
                        <Stack alignItems="center">
                          <Typography color="primary" gutterBottom variant="h3">
                            Bem vindo
                          </Typography>
                        </Stack>
                      </Grid>
                      <Grid xs={12}>
                        <FormAuth />
                      </Grid>
                    </Grid>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
        <Grid xs={12} sx={{ mt: 4.5, px: 2 }}>
          <AuthFooter />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Login;
