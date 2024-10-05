/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#8129d9",
        "primary-alt": "#5d18a2",
        sand: "#e0e2d9",
        chalk: "#f6f7f5",
        fuschia: "#d717e7",
        "fuschia-alt": "#b013bf",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities, addComponents, e, config }) {
      addUtilities({
        // when creating a custom button in product for some design that is not yet in the system
        // or is a unicorn, this is a utility to achieve the same focus ring used by Button
        ".focusable": {
          "@apply outline-none focus-visible:ring-2 focus-visible:ring-black ring-offset-2":
            {},
        },
      });
    }),
    require("tailwindcss-touch")(),
  ],
};
