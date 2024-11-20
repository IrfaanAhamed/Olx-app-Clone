import withMT from "@material-tailwind/react/utils/withMT";

const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("@tailwindcss/typography")],
  theme: {
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      1: "1px",
      2: "2px",
      3: "3px",
      4: "4px",
      6: "6px",
      8: "8px"
    },
    colors: {
      ...colors,
      primary: "#f1f5f9",
      secondary: "#002f34",
      accent: "#222",
      neutral: "#ffffff",
      "base-100": "#0a0a0a",
      info: "#38bdf8",
      success: "#00ff00",
      warning: "#fde047",
      error: "#dc2626",
      "red-500": "red"
    },
    fontFamily: {
      sans: ["Ubuntu", "sans-serif"]
    },
    extend: {
      container: {
        padding: {
          DEFAULT: "0"
        }
      }
    }
  }
});
