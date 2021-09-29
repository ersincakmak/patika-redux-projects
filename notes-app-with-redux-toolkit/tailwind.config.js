module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        700: "43.75rem",
      },
      minWidth: {
        150: "9.375rem",
      },
      maxWidth: {
        700: "43.75rem",
        150: "9.375rem",
        200: "12.5rem",
      },
      colors: {
        pink: "#f06292",
        purple: "#ba68c8",
        yellow: "#ffd54f",
        blue: "#4fc3f7",
        green: "#aed581",
        "pink-black": "#bb1c52",
        "purple-black": "#8a3e97",
        "yellow-black": "#bb951c",
        "blue-black": "#1480b1",
        "green-black": "#6e9f36",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
