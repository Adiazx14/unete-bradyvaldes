"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppBar, ThemeProvider, Toolbar, createTheme } from "@mui/material";
import HideOnScroll from "./components/HideOnScroll";
import LinkDropdown from "./components/LinkDropdown";
import { use } from "react";

const inter = Inter({ subsets: ["latin"] });

/* export const metadata = {
  title: "Únete al equipo",
  description: "Únete a nuestro equipo de trabajo!",
};
 */
const theme = createTheme({
  palette: {
    primary: {
      main: "#F2CC8F", // A modern purple, often associated with creativity and imagination
    },
    secondary: {
      main: "#9966cc", // A teal that provides a vibrant contrast to the purple
    },
    error: {
      main: "#CF6679", // A muted red, less aggressive than a bright red
    },
    warning: {
      main: "#fff", // A warm amber
    },
    info: {
      main: "#2196F3", // A classic blue, good for informational cues
    },
    success: {
      main: "#69F0AE", // A mint green, for a fresh look on success messages
    },
    background: {
      default: "#FFFFFF", // A very dark grey, almost black, for the main background
      paper: "#1E1E1E", // A slightly lighter grey for elements like cards and sheets
    },
    text: {
      primary: "#C5C6C7", // Pure white for the main text, offering a strong contrast
      secondary: "rgba(255, 255, 255, 0.7)", // A slightly dimmed white for less important text
    },
  },
  // Additional customizations can go here
});

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <ThemeProvider theme={theme}>
          <HideOnScroll threshold={0}>
            <AppBar
              sx={{ mb: 4 }}
              className="navbar"
              color="background"
              position="sticky"
            >
              <Toolbar
                sx={{
                  display: "flex",
                  justifyContent: "end",
                }}
              >
                <LinkDropdown />
              </Toolbar>
            </AppBar>
          </HideOnScroll>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
