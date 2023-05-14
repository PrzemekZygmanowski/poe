/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightBlue: "#38bdf8",
        darkBlue: "#0f172a",
        darkSky: "#082f49",
        grey: "#94a3b8",
        white: "#f1f5f9",
      },
    },
  },
  plugins: [],
};
