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
        darkSky_950: "#082f49",
        lightSky_400: "#38bdf8",
        darkSlate_900: "#0f172a",
        lightSlate_400: "#94a3b8",
        lightSlate_100: "#f1f5f9",
      },
      fontSize: {
        smallTitle: ["20px", "24px"],
        paragraph: ["24px", "30px"],
        shortcut: ["16px", "20px"],
      },
    },
  },
  plugins: [],
};
