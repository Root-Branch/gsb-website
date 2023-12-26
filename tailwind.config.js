/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  daisyui: {
    themes: [
      {
        default: {
          primary: "#006d69",
          secondary: "#d926a9",
          accent: "#1fb2a6",
          neutral: "#2f5c59",
          "base-100": "#fbfcf6",
        },
      },
    ],
  },
  theme: {
    extend: {
      colors: {
        light: "#f6f6f6",
        "light-content": "#1e1e1e",

        dark: "#1e1e1e",
        "dark-content": "#f6f6f6",
      },
      fontFamily: {
        body: "Nunito Sans",
      },
      backgroundImage: {
        banner: "url('~/assets/banner.png')",
      },
    },
  },
  plugins: [require("daisyui")],
};
