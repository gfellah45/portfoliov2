module.exports = {
  mode: "jit",
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
        boxShadow: {
          default: "-3px -12px 16px 2px rgba(177,16,247,0.58)",
        },
      },
      fontFamily: {
        body: ["Alegreya", "serif"],
        heading: ["Playfair Display", " serif"],
        heading2: ["Anton", "sans-serif"],
        text: ["Source Sans Pro", "sans-serif"],
      },
    },
  },

  //   font-family: 'Alegreya', serif;
  // font-family: 'Playfair Display', serif;
  // font-family: 'Source Sans Pro', sans-serif;

  variants: {
    extend: {},
  },
  plugins: [],
};
