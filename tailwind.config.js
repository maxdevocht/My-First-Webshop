/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        peach: {
          50: "#fef3f2",
          100: "#ffdad6",
          200: "#ffcdc8",
          300: "#ffaba2",
          400: "#fd7a6c",
          500: "#f5503e",
          600: "#e33320",
          700: "#bf2616",
          800: "#9d2417",
          900: "#83241a",
          950: "#470e08",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
