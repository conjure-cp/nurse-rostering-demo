"use client";
import "../styles/globals.css";
import "./(main)/main.scss";
import { 
    ChakraProvider ,
    Flex, 
    Box 
} from "@chakra-ui/react";
import theme from "../styles/theme";
import { ReactNode } from "react";

import GlobalContextProvider from "../components/GlobalContext";
import Banner from "../components/Banner";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>NRP</title>
      </head>
      <body>
        <GlobalContextProvider>
          <ChakraProvider theme={theme}>
            <Flex 
                direction="column"
                height="120vh"
                justifyContent="space-between"
              >
                <Box>
                  {/* Content */}
                  {children}
                </Box>
                
                {/* Banner */}
                <Box zIndex={2} height="auto" color="primaryText">
                  <Banner />
                </Box>
              </Flex>
          </ChakraProvider>
        </GlobalContextProvider>
      </body>
    </html>
  );
}
