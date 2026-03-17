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
          DEFAULT: "#F5F0E8",
          dark: "#EDE7D8",
        },
        royal: {
          DEFAULT: "#1C3A7A",
          deep: "#132A5E",
          light: "#2B4FA0",
        },
        charcoal: "#1A1A1A",
        "warm-white": "#FDFBF7",
        gold: "#C8A96E",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        heading: ["var(--font-cormorant)", "serif"],
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
