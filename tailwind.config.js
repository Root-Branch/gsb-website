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
