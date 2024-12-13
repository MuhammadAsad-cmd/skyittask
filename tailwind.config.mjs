/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
      },
      boxShadow: {
        btnShadow: "box-shadow: 0px 0px 7px 0px #00000026",
      },
      colors: {
        lavenderBlush: "#FFF0F5",
        darkGray: "#1F1F1F",
        deepCharcoal: "#1A1718",
        mintGreen: "#DAF0DC",
        skyBlue: "#54A3FA",
        forestGreen: "#2AA136",
        orangePeel: "#FE9132",
        hotPink: "#FD71AF",
        softPink: "#F470AB",
        softPink2: "#F470AB1A",
        pureWhite: "#FAFAFA",
        pinkRose: "#E7448C",
        darkBlue: "#1C2A54",
      },
    },
  },
  plugins: [],
};
