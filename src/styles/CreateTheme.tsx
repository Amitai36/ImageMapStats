import {
  CssBaseline,
  //   PaletteMode,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import React, { ReactNode } from "react";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
//   import { DarkModeContext } from "../contexts/darkMode";

interface ProviderThemeProps {
  children: ReactNode;
}

function ProviderTheme(props: ProviderThemeProps) {
  // const localStorage = window.localStorage;
  // const [darkMode, setDarkMode] = React.useState<PaletteMode>(
  //   (localStorage.getItem("dark") as PaletteMode) ?? "dark"
  // );

  // const toggleTheme = () => {
  //   setDarkMode((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  //   window.localStorage.setItem(
  //     "dark",
  //     darkMode === "light" ? "dark" : "light"
  //   );
  // };

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: "dark",
          background: {
            default: /* "dark" === "dark" ? */ "black" /*  : "#e2f2f2" */,
          },
        },
        direction: "rtl",
        components: {
          MuiTextField: {
            defaultProps: {
              size: "small",
            },
            styleOverrides: {
              root: {
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderRadius: 50,
                    borderColor: "yellow solid",
                  },
                },
              },
            },
          },
        },
      }),
    [
      /* "dark" */
    ]
  );
  const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
  });

  return (
    <CacheProvider value={cacheRtl}>
      {/* <DarkModeContext.Provider
          value={{ mode: darkMode, toggleMode: toggleTheme }}
        > */}
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div
          style={{
            height: "100vh",
            width: "100vw",
            maxWidth: "100%",
          }}
        >
          {props.children}
        </div>
      </ThemeProvider>
      {/* </DarkModeContext.Provider> */}
    </CacheProvider>
  );
}

export default ProviderTheme;
