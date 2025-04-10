module.exports = {
  content: ["./../../*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#4C94C6",
        secondary: "#DCECF7",
        tertiary: "#FFFCF9",
        theme: {
          DEFAULT: "var(--theme-color, #3b82f6)",
          primary: "var(--theme-primary, #2563eb)",
          secondary: "var(--theme-secondary, #60a5fa)",
          tertiary: "var(--theme-tertiary, #93c5fd)",
        },
      },
      backgroundImage: {
        "hero-pattern": "url('yourPath')",
      },
      fontFamily: {
        Cabin: ['"Cabin"', "sans-serif"],
        Exo: ['"Exo 2"', "sans-serif"],
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
