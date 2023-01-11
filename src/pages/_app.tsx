import type { ReactElement, ReactNode } from "react";
import { useMemo, useState, createContext, useContext } from "react";
import { CacheProvider, EmotionCache } from "@emotion/react";
import type { NextPage } from "next";
import { AppProps } from "next/app";
import Head from "next/head";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { ptBR as ptBR_MUI } from "@mui/material/locale";
import { ptBR } from "date-fns/locale";
import { createTheme, CssBaseline, PaletteMode } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { lightOptions, darkOptions } from "../theme";
import createEmotionCache from "../utils/createEmotionCache";

const ColorModeContext = createContext({ toggleColorMode: () => {} });
const clientSideEmotionCache = createEmotionCache();

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
  emotionCache?: EmotionCache;
};

function getActiveTheme(themeMode: PaletteMode) {
  return themeMode === "light" ? lightOptions : darkOptions;
}

export default function App(props: AppPropsWithLayout) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  const [mode, setMode] = useState<PaletteMode>("light");

  const getLayout = Component.getLayout ?? ((page) => page);

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) =>
          prevMode === "light" ? "dark" : "light"
        );
      },
    }),
    []
  );

  const theme = useMemo(
    () => createTheme(getActiveTheme(mode), ptBR_MUI),
    [mode]
  );

  return (
    <CacheProvider value={emotionCache}>
      <ColorModeContext.Provider value={colorMode}>
        <Head>
          <title>SIGVENDEES</title>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ptBR}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {getLayout(<Component {...pageProps} />)}
          </ThemeProvider>
        </LocalizationProvider>
      </ColorModeContext.Provider>
    </CacheProvider>
  );
}

export const usePageContext = () => useContext(ColorModeContext);
