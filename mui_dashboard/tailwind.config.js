/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        accent:{
          1 : "rgb(var(--color-accent1) / <alpha-value>)",
          2 : "rgb(var(--color-accent2) / <alpha-value>)"
        },
        bkg: "rgb(var(--color-bkg) / <alpha-value>)",
        txt: "rgb(var(--color-txt) / <alpha-value>)"
      }
    },
  },
  plugins: [],
}