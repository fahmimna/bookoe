module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: {
          100: "#f1f0fe",
          300: "#d9dbe9",
          500: "#a3a3a3",
          600: "#757575",
          900: "#1d1d1d",
          "600_01": "#727272",
          "900_dd": "#1d1d1ddd",
          "900_99": "#0d084299",
          "900_01": "#0d0842",
          "300_01": "#d8e5e5",
        },
        blue_gray: {
          50: "#eff0f6",
          100: "#cccccc",
          500: "#6e6b8f",
          "50_01": "#e7eff2",
        },
        deep_orange: { A200: "#f46041" },
        amber: { A200: "#f6cf3c" },
        orange: { 300: "#f3b953" },
        teal: { 300: "#60c697" },
        black: { 900: "#000000" },
        yellow: { 800: "#fdaf17" },
        deep_purple: { A200: "#8170f2" },
        white: { A700: "#ffffff" },
      },
      fontFamily: {
        poppins: "Poppins",
        montserrat: "Montserrat",
        dmsans: "DM Sans",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
