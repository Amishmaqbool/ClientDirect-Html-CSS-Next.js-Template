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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        soleil: "var(--font-soleil)",
      },
      screens:{
        'max-xl':{'max':'1280px'},
        'max-md': {'max': '990px'},
        'max-sm':{'max':'768px'}
      }
    },
  },
  plugins: [],
};
export default config;
