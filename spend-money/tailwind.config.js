module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        myShadow: "0 8px 4px 0 rgba(0,0,0,.1)",
      },
    },
  },
  variants: {
    extend: {
      cursor: ["disabled"],
      backgroundColor: ["disabled"],
    },
  },
  plugins: [],
};
