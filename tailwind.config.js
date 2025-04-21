/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#BF9264",
        secondary: "#6F826A",
        tertiary: "#BBD8A3",
        quaternary: "#F0F1C5",
        accent: "#F8EEDF",
        hover: "#D5AA7D",
      },
      spacing: {
        base: "40px",
      }
    },
  },
  plugins: [],
}