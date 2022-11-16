//theme.ts
import { extendTheme } from "@chakra-ui/react";
import { StyleFunctionProps} from "@chakra-ui/theme-tools";
import colors from "tailwindcss/colors";

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const theme = extendTheme({
  config,
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
      900: "#171717"
    }
  },
  styles: {
    global: (props: Record<string, any> | StyleFunctionProps) => ({
      body: {
        bg: "#1C1B1F",
      },
      p: {
        color: "#aaa",
      },
      h1: {
        color: "white",
      },
      h2: {
        color: "white",
      },
      h3: {
        color: "white",
      }
    })
  },
})

export default theme;