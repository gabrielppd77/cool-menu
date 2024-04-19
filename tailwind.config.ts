import type { Config } from "tailwindcss";

const colors = require("tailwindcss/colors");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.gray[600],
        "primary-hover": colors.gray[500],
        "primary-highlight": colors.gray[50],
        paper: colors.gray[50],
      },
    },
  },
  plugins: [],
};
export default config;
