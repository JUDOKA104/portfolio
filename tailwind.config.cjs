/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: { bg: "#0b0c0e", accent: "#005A1E" }
      },
      boxShadow: {
        rog: "0 10px 30px rgba(0,0,0,.5)"
      }
    },
  },
  plugins: [],
};
