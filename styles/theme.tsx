//theme.ts
import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";
import { StyleFunctionProps } from "@chakra-ui/theme-tools";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme(
  {
    config,
    components: {
      Badge: {
        baseStyle: {
          paddingY: "3px",
          paddingX: "8px",
        },
      },
    },
    fonts: {
      heading: `'Inter', sans-serif`,
      body: `'Inter', sans-serif`,
    },
    colors: {
      primary: {
        main: "#FFFFFF",
        50: "#fafafa",
        100: "#f5f5f5",
        200: "#e5e5e5",
        300: "#d4d4d4",
        400: "#a3a3a3",
        500: "#737373",
        600: "#525252",
        700: "#404040",
        800: "#262626",
        900: "#171717",
      },
    },
    styles: {
      global: (props: Record<string, any> | StyleFunctionProps) => ({
        body: {
          bg: "#FFFBFF",
        },
        p: {
          color: "#33333",
        },
        h1: {
          color: "black",
        },
        h2: {
          color: "black",
        },
        h3: {
          color: "black",
        },
      }),
    },
  },
  withDefaultColorScheme({ colorScheme: "purple" })
);

export default theme;
