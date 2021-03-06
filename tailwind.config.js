module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    container: {
      center: true,
    },
  },
  plugins: ["tailwindcss", "postcss-preset-env"],
  fontFamily: {
    "Open Sans": ["Open Sans"],
  },
};
