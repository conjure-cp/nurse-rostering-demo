"use client";
import "../styles/globals.css";
import "./(main)/main.scss";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../styles/theme";
import { ReactNode } from "react";
import GlobalContextProvider from "../components/GlobalContext";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>NRP</title>
      </head>
      <body>
        <GlobalContextProvider>
          <ChakraProvider theme={theme}>{children}</ChakraProvider>
        </GlobalContextProvider>
      </body>
    </html>
  );
}
