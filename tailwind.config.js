module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        light: {
          bg1: "#FEFBE9",
          bg3: "#E1EEDD",
          bg: "#FEFEFF",
          bg2: "#7510F7",
          text1: "#0A0A0A",
          text2: "#141C3A",
        },
        dark: {
          bg: "#0a192f",
          text1: "#dbe6f4",
        },
      },
      fontFamily: {
        body: ["Nunito", "sans-serif"],
      },
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
};
