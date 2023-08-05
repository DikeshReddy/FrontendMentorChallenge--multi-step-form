/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{jsx,tsx,ts,js}", "./index.html"],
  theme: {
    extend: {
      colors: {
        blue: {
          100: "hsl(213, 96%, 18%)",
          200: "hsl(243, 100%, 62%)",
          300: "hsl(228, 100%, 84%)",
          400: "hsl(206, 94%, 87%)",
        },
        red: {
          100: "hsl(354, 84%, 57%)",
        },
        gray: {
          100: "hsl(231, 11%, 63%)",
          200: "hsl(229, 24%, 87%)",
        },
        magnolia: {
          100: "hsl(217, 100%, 97%)",
        },
        Alabaster: {
          100: "hsl(231, 100%, 99%)",
        },
        white: "hsl(0, 0%, 100%)",
      },
      fontFamily: {
        sans: ["Ubuntu", "sans-serif"],
      },
      fontWeight: {
        thin: "400",
        bold: "500",
        extrabold: "700",
      },
    },
  },
  plugins: [],
};
