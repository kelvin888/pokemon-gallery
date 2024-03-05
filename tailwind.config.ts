import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          "hero-background": 'url("/hero.png")'
      },
    },
    colors: {
      primary: {
        300: "#f2e8e8",
        500: "#e5d1d1",
        900: "#de2121"
      },
      brown: {
        900: "#944f4f"
      },
      black: "#1c0d0d",
      white: "#ffffff",
      gray:{
        300: "#faf7f7",
        400: "#e5e8eb"
      }
    },
    fontFamily: {
      lexend: ['var(--font-lexend)'],
    }
  },
  plugins: [],
};
export default config;
