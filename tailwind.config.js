/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        default: ["14px", { lineHeight: "18px" }],
        xs: ["16px", { lineHeight: "22px" }],
        xl: ["22px", { lineHeight: "32px" }],
      },
      colors: {
        darkLavander: "#734f96",
        white: "#ffffff",
        lavenderBlue: "#c0b7e8",
        deepPurple: "#343045",
        paleLavenderBlue: "#CAD1E9",
      },
      backgroundImage: {
        violetGradient:
          "linear-gradient(0deg, #343045 0%, #c0b7e8 35%, #8176af 69%, #343045 100%)",
        darkVioletGradient:
          "linear-gradient(0deg, #1e1b2d 0%, #a098cf 35%, #6b6290 69%, #1e1b2d 100%)",
        darkGradient: "linear-gradient(0deg, #21223C 0%, #0B0B26 100%)",
        raindowGradient:
          "linear-gradient(0deg, #B67EFD 0%, #F088D2 50%, #FFAD8B 100%)",
        grayGradient: "linear-gradient(0deg, #1B1C36 0%, #70717A 100%)",
        useCardGradient: "radial-gradient(circle, #433D60 10%, #211E2E 100%)",
        heroGradient: "radial-gradient(circle, #3A3456 0%, #211E2E 100%)",
      },
    },
    screens: {
      mini: "520px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "15px",
        sm: "20px",
        lg: "40px",
        xl: "60px",
      },
    },
  },
  plugins: [],
};
