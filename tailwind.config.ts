import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: "#FFF9E9",
          dark: "#F5EDD0",
        },
        royal: {
          DEFAULT: "#0857B4",
          deep: "#064499",
          light: "#2970CC",
        },
        charcoal: "#1A1A1A",
        "warm-white": "#FDFBF7",
        gold: "#C8A96E",
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        heading: ["var(--font-cormorant)", "Georgia", "serif"],
        body: ["var(--font-dm-sans)", "sans-serif"],
      },
      maxWidth: {
        container: "1280px",
      },
    },
  },
  plugins: [],
};
export default config;
