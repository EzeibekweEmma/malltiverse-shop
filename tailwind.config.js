/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/*.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}", "./app/**/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        pryColor: "#2A2A2A",
        secColor: "#FF7F7D",
        bgColor: "#FFFFFF",
      },
    },
    plugins: [],
  }
}