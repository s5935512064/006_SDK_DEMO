import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Heleness: ["var(--font-helenehess)"],
      },
      borderWidth: {
        1: "1px", // Customize border-width to 1px
        2: "2px", // Customize border-width to 2px
        // Add more custom border-width values as needed
      },
      colors: {
        primary: "#02102a",
        secondary: "#d9cdc0",
      },
    },
    screens: {
      sm: "640px", // Small screens
      md: "768px", // Medium screens
      lg: "1024px", // Large screens
      xl: "1280px", // Extra large screens
    },
  },
  plugins: [require("tailwind-scrollbar")],
  variants: {
    scrollbar: ["rounded"],
  },
};
export default config;
