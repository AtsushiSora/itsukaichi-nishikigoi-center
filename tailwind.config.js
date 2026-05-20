/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        sumi: "#121212",
        urushi: "#7c1018",
        kin: "#c7a052",
        mizu: "#1f6f8f",
        washi: "#f7f4ee",
      },
      fontFamily: {
        sans: [
          '"Noto Sans JP"',
          '"Hiragino Sans"',
          '"Yu Gothic"',
          "system-ui",
          "sans-serif",
        ],
        serif: ['"Noto Serif JP"', '"Yu Mincho"', "serif"],
      },
      boxShadow: {
        soft: "0 20px 60px rgba(18, 18, 18, 0.14)",
      },
    },
  },
  plugins: [],
};
