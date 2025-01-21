import type { Config } from "tailwindcss";

const config: Config ={
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
    },
    screens: {
      mini: '520px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '15px',
        sm: '20px',
        lg: '40px',
        xl: '60px',
      },
    },
  },
  plugins: [],
};
export default config;
