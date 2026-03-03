import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary — deep mauve/purple (Pinch of Yum style)
        brand: {
          50:  "#fdf4f8",
          100: "#f5dfe9",
          200: "#e8b9ce",
          300: "#d48aae",
          400: "#b86a90",
          500: "#9a4f75",
          600: "#734060",
          700: "#5c3350",
          800: "#452540",
          900: "#2e1830",
          950: "#1a0b1c",
        },
        // Accent — warm gold
        accent: {
          300: "#f5d48a",
          400: "#f0c460",
          500: "#edb654",
          600: "#d49e3a",
        },
      },
      fontFamily: {
        serif: ["Bitter", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
