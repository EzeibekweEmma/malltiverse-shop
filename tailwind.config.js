/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/*.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}", "./app/**/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        textC: "#2A2A2A",
        textC2: "#FF7F7D",
      },
    },
    plugins: [],
  }
}