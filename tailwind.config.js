/** @type {import('tailwindcss').Config} */
export default  {
  mode: "jit",
  content: [
    "./index.html",
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: { 400: "#c4c4c4", 600: "#777777" },
        blue_gray: {
          50: "#f1f1f1",
          300: "#94aabc",
          900: "#0a2640",
          "900_1b": "#0a26401b",
          "900_00": "#0a264000",
        },
        light_blue: { A400: "#0dbbfc" },
        orange: { A700: "#fb5a00" },
        white: { A700_2d: "#ffffff2d", A700: "#ffffff" },
        green: { 800: "#009d0f", A200: "#65e4a3", A200_01: "#69e6a6" },
        black: { 900: "#000000", "900_1e": "#0000001e", "900_14": "#00000014" },
        amber: { A700: "#eba900" },
        indigo: { 200: "#8fb6d5" },
      },
      boxShadow: {
        bs2: "0px 4px  32px 0px #0000001e",
        bs1: "0px 12px  32px 0px #0000001e",
        bs: "0px 4px  32px 0px #00000014",
      },
      fontFamily: {
        opensans: "Open Sans",
        manrope: "Manrope",
        worksans: "Work Sans",
      },
      backgroundImage: {
        gradient: "linear-gradient(90deg ,#0a2640,#0a26401b,#0a264000,#0a2640)",
      },
    },
  },
  // plugins: [require("@tailwindcss/forms")],
};


