"use client";
import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import NextAppDirEmotionCacheProvider from "./EmotionCache";
import theme from "./theme";
import { SessionProvider } from "next-auth/react";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import { ToastContainer } from "react-toastify";
import SimpleBackdrop from "@/components/common/SimpleBackdrop";

export default function ThemeRegistry({ children }) {
  return (
    <NextAppDirEmotionCacheProvider options={{ key: "mui" }}>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <SessionProvider>
          <main>
            <ProgressBar
              height="2px"
              color="#1976d2"
              options={{
                showSpinner: true,
                easing: "ease",
                speed: 500,
              }}
              shallowRouting
            />
            <SimpleBackdrop />
            <ToastContainer autoClose={1500} draggable={false} />
            {children}
          </main>
        </SessionProvider>
      </ThemeProvider>
    </NextAppDirEmotionCacheProvider>
  );
}
