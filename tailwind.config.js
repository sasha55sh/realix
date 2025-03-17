const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      fontSize: {
        default: ["14px", { lineHeight: "18px" }],
        xs: ["16px", { lineHeight: "22px" }],
        xl: ["22px", { lineHeight: "32px" }],
      },
      colors: {
        darkLavander: "#734F96",
        white: "#FFFFFF",
        lavenderBlue: "#C0B7E8",
        deepPurple: "#343045",
        pearlBlue: "#CAD1E9",
        darkGray: "#2C2D47",
        grafit: "#70717A"

      },
      backgroundImage: {
        violetGradient:
          "linear-gradient(90deg, #343045 0%, #C0B7E8 35%, #8176AF 69%, #343045 100%)",
        darkVioletGradient:
          "linear-gradient(90deg, #1E1B2D 0%, #A098CF 35%, #6B6290 69%, #1E1B2D 100%)",
        darkGradient: "linear-gradient(0deg, #21223C 0%, #0B0B26 100%)",
        raindowGradient:
          "linear-gradient(90deg, #B67EFD 0%, #F088D2 41%, #FFAD8B 100%)",
        grayGradient: "linear-gradient(90deg, #1B1C36 0%, #70717A 100%)",
        useCardGradient: "radial-gradient(circle, #433D60 30%, #211E2E 70%)",
        heroGradient: "radial-gradient(circle, #3A3456 0%, #211E2E 100%)",
        formGradient: "radial-gradient(circle, #403A5F 0%, #211E2E 100%)",
        priceCardGradient: "linear-gradient(90deg, #1B1C36 0%, #70717A 100%)",
        circleGradient: "radial-gradient(circle, #C0B7E8 30%, #8176AF 70%) ",
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
  plugins: [flowbite.plugin()],
};
