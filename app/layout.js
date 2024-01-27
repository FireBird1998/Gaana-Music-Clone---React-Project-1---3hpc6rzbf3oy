"use client";

import "./globals.css";
import { useState } from "react";
import { Inter } from "next/font/google";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import NavBar from "@/components/NavBar";
import { PlayerListProvider } from "@/components/Context/PlayerList";
import { AuthProvider } from "@/components/Context/AuthContex";
import { FavouriteSongsProvider } from "@/components/Context/FavouriteSongsContext";

import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Gaana.com clone",
  description: "Next.js gana",
};

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

export default function RootLayout({ children }) {
  const [theme, setTheme] = useState(darkTheme);

  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider theme={theme}>
          <AppRouterCacheProvider options={{ enableCssLayer: true }}>
            <AuthProvider>
              <FavouriteSongsProvider>
                <PlayerListProvider>
                  <NavBar themeToggle={toggleTheme} content={children} />
                  <Toaster position="top-right" reverseOrder={false} />
                </PlayerListProvider>
              </FavouriteSongsProvider>
            </AuthProvider>
          </AppRouterCacheProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
