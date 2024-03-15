/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  theme: {
    extend: {
      boxShadow: {
        key: 'inset 0px -4px 0px rgb(var(--calc-key-shadow) / 0.5)',
        'key-pressed': 'inset 0px -1px 0px rgb(var(--calc-key-shadow) / 0.5)'
      },
      textColor: {
        skin: {
          output: {
            base: "rgb(var(--calc-output-text-base) / <alpha-value>)",
            muted: "rgb(var(--calc-output-text-muted) / <alpha-value>)",
            inverted: "rgb(var(--calc-output-text-inverted) / <alpha-value>)",
          },
          toolbar: {
            base: "rgb(var(--calc-toolbar-text) / <alpha-value>)",
            action: "rgb(var(--calc-toolbar-text-action) / <alpha-value>)",
            'action-hover': "rgb(var(--calc-toolbar-text-action-hover) / <alpha-value>)",
          }
        },

      },
      backgroundColor: {
        skin: {
          fill: 'rgb(var(--calc-background) / <alpha-value>)',
          'key-digit': 'rgb(var(--calc-key-digit) / <alpha-value>)',
          'key-operation': 'rgb(var(--calc-key-operation) / <alpha-value>)',
          'key-eval': 'rgb(var(--calc-key-eval) / <alpha-value>)',
          'key-del': 'rgb(var(--calc-key-del) / <alpha-value>)',
          'key-clear': 'rgb(var(--calc-key-clear) / <alpha-value>)'
        }
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

