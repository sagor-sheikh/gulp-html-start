const options = require("./config"); //options from config.js

const allPlugins = {
  typography: require("@tailwindcss/typography"),
  forms: require("@tailwindcss/forms"),
  containerQueries: require("@tailwindcss/container-queries"),
};

const plugins = Object.keys(allPlugins)
  .filter((k) => options.plugins[k])
  .map((k) => {
    if (k in options.plugins && options.plugins[k]) {
      return allPlugins[k];
    }
  });

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,php}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        primary: "#96F048",
        secondary1: "#9D65FB",
        secondary2: "#FF6161",
        secondary3: "#BD7B00",
        at10: "#1E2132",
        at20: "#23283C",

        nw10: "#FFFFFF",
        nw20: "#EBECF0",
        nw30: "#B3B6B9",
        nw40: "#F6F9FF",

        nb10: "#191919",
        nb20: "#2C2C2C",
        nb30: "#1F1F1F",
        nb40: "#292D36",
      },
      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        xxl: "1400px",
        xxxl: "1600px",
        "4xl": "1800px",
      },
      animation: {
        "spin-slow": "spin 2s linear infinite",
      },
    },
  },
  // plugins: plugins,
};
