/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: "#FFFBFF",
        surface1: "#6750A40D",
        surface2: "#6750A414",
        surface3: "#6750A41C",
        surface4: "#6750A41F",
        surface5: "#6750A424",
        primary: "#6750A4",
        primaryContainer: "#EADDFF",
        primaryText: "#21005D",
        secondary: "#625B71",
        secondaryContainer: "#E8DEF8",
        secondaryText: "#1D192B",
        tertiary: "#7D5260",
        tertiaryContainer: "#FFD8E4",
        tertiaryText: "#31111D",
        error: "#B3261E",
        errorContainer: "#F9DEDC",
        errorText: "#410E0B",
        dark: "#1C1B1F",
        outline: "#79747E",
      },
    }
  },
  plugins: [],
};
