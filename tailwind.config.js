/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  theme: {
    extend: {
      colors: {
        "primary": "#0022aa",
        "secondary": "#000000"
      }
    },
    fontFamily: {
      Roboto: ["Roboto, sans-serif"]
    },
    // container: {
    //   padding: "1rem",
    //   center: true,
    //   maxWidth: {
    //     DEFAULT: "100%"
    //   }
    // },
    // screens: {
    //   sm: "640px",
    //   md: "768px"
    // }
  },
  plugins: [],
}

