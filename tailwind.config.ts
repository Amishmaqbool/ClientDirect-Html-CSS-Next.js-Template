import { execSync } from 'child_process';
import typography from '@tailwindcss/typography';

const tailwindVersion = execSync('npm list tailwindcss --version', { encoding: 'utf-8' });
const isOldVersion = tailwindVersion.startsWith('2');

const isDeviceVersionOld = () => {
  if (typeof window === 'undefined') return false;
  
  const userAgent = window.navigator.userAgent;

  const iosMatch = userAgent.match(/OS (\d+)_/);
  if (iosMatch) {
    const iosVersion = parseInt(iosMatch[1], 10);
    return iosVersion < 14;
  }

  const androidMatch = userAgent.match(/Android (\d+)\./);
  if (androidMatch) {
    const androidVersion = parseInt(androidMatch[1], 10);
    return androidVersion < 14;
  }

  return false;
};

const config = {
  ...(isOldVersion || isDeviceVersionOld()
    ? {
        purge: [
          "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
          "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
          "./src/constants/**/*.{js,ts,jsx,tsx,mdx}",
          "./src/services/**/*.{js,ts,jsx,tsx,mdx}",
          "./contents/**/*.mdx",
        ],
      }
    : {
        content: [
          "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
          "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
          "./src/constants/**/*.{js,ts,jsx,tsx,mdx}",
          "./src/services/**/*.{js,ts,jsx,tsx,mdx}",
          "./contents/**/*.mdx",
        ],
      }),
  theme: {
    extend: {
      screens: {
        xs: "480px",
        base: "990px",
      },
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
          "0%, 100%": { boxShadow: "0 0 5px 2px rgba(50, 87, 255, 0.5)" },
          "50%": { boxShadow: "0 0 20px 10px rgba(50, 87, 255, 0.8)" },
        },
      },
      animation: {
        boxBounce: "boxBounce 1.5s ease-in-out infinite",
      },
    },
  },
  plugins: [typography],
};

export default config;
