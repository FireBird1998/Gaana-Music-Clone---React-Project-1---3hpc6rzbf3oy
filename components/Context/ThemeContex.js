"use client";

import React, { createContext, useState } from "react";
import { createTheme } from "@mui/material";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#f5f5f5",
    },
    secondary: {
      main: "#f40000",
      light: "#f56200",
      dark: "#f40000",
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#f5f5f5",
    },
    secondary: {
      main: "#f40000",
      light: "#f56200",
      dark: "#f40000",
    },
  },
});

export const ThemeContex = createContext();

const {Provider} = ThemeContex;

export const ThemeContexProvider = ({ children }) => {
  const [theme, setTheme] = useState(darkTheme);

  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  }; // or initial state

  return (
    <Provider
      value={{
        theme,
        toggleTheme,
        lightTheme,
        darkTheme,
      }}
    >
      {children}
    </Provider>
  );
};
