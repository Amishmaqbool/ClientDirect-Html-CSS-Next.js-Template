import type { Config } from "tailwindcss";
import typography from '@tailwindcss/typography';

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./contents/**/*.{mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customBlue: "#3257ff",
      },
      fontFamily: {
        soleil: "var(--font-soleil)",
      },
      keyframes: {
        boxBounce: {
          '0%, 100%': { boxShadow: '0 0 5px 2px rgba(50, 87, 255, 0.5)' },
          '50%': { boxShadow: '0 0 20px 10px rgba(50, 87, 255, 0.8)' },
        },
      },
      animation: {
        boxBounce: 'boxBounce 1.5s ease-in-out infinite',
      },
    },
  },
  plugins: [
    typography, // Updated to use the imported variable
  ],
};

export default config;
