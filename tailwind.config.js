module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gradientColorStops: (theme) => ({
        ...theme("colors"),
        primary: {
          50: "#fcebec",
          100: "#f8d8d9",
          200: "#f2b0b2",
          300: "#eb898c",
          400: "#e56165",
          DEFAULT: "#DE3A3F",
          600: "#b22e32",
          700: "#852326",
          800: "#591719",
          900: "#2c0c0d",
        },
        secondary: {
          50: "#e7ebef",
          100: "#cfd7de",
          200: "#9fb0be",
          300: "#6f889d",
          400: "#3f617d",
          DEFAULT: "#0F395C",
          600: "#0c2e4a",
          700: "#092237",
          800: "#061725",
          900: "#030b12",
        },
      }),
      container: {
        padding: {
          DEFAULT: "2rem",
          sm: "2.25rem",
          lg: "2rem",
          xl: "4rem",
          "2xl": "6rem",
        },
      },
      colors: {
        body: "#ffffff",
        primary: {
          50: "#fcebec",
          100: "#f8d8d9",
          200: "#f2b0b2",
          300: "#eb898c",
          400: "#e56165",
          DEFAULT: "#DE3A3F",
          600: "#b22e32",
          700: "#852326",
          800: "#591719",
          900: "#2c0c0d",
        },
        secondary: {
          50: "#e7ebef",
          100: "#cfd7de",
          200: "#9fb0be",
          300: "#6f889d",
          400: "#3f617d",
          DEFAULT: "#0F395C",
          600: "#0c2e4a",
          700: "#092237",
          800: "#061725",
          900: "#030b12",
        },
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        br: "4px 4px 0 0 rgba(0, 0, 0, .08)",
        "2br": "6px 6px 0 0 rgba(0, 0, 0, .1)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
