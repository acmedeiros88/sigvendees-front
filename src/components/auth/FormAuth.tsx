import React, { useState } from "react";
import { useRouter } from "next/router";
import NextLink from "next/link";
// MATERIAL UI
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography,
} from "@mui/material";
//ICONS
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export default function FormAuth() {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [checked, setChecked] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event: any) => {
    event.preventDefault();
  };

  return (
    <form>
      <FormControl fullWidth sx={{ marginTop: 2, marginBottom: 2.5 }}>
        <InputLabel htmlFor="email">Email</InputLabel>
        <OutlinedInput
          id="email"
          name="email"
          type="email"
          label="Email"
        />
      </FormControl>

      <FormControl fullWidth sx={{ marginTop: 1, marginBottom: 2.5 }}>
        <InputLabel htmlFor="password">Password</InputLabel>
        <OutlinedInput
          id="password"
          name="password"
          type={showPassword ? "text" : "password"}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
                size="large"
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
        />
      </FormControl>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        spacing={1}
      >
        <FormControlLabel
          control={
            <Checkbox
              checked={checked}
              onChange={(event) => setChecked(event.target.checked)}
              name="checked"
              color="primary"
            />
          }
          label="Remember me"
        />
        <Typography
          variant="subtitle1"
          color="primary"
          sx={{ textDecoration: "none", cursor: "pointer" }}
        >
          Esqueceu a senha?
        </Typography>
      </Stack>

      <Box sx={{ mt: 5 }}>
        <Button
          disableElevation
          disabled={isSubmitting}
          fullWidth
          component={NextLink}
          href="/"
          size="large"
          type="submit"
          variant="contained"
          color="primary"
        >
          Entrar
        </Button>
      </Box>
    </form>
  );
}
