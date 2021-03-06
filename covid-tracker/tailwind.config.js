module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      maxWidth: {
        700: "700px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
