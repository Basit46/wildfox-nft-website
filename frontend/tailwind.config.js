/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        vsm: "400px",
        xmd: "900px",
      },
      fontFamily: {
        SpaceGrotesk: ["Space Grotesk", "sans-serif"],
        Gulfs: ["Gulfs", "sans-serif"],
      },
    },
  },
  plugins: [],
};
