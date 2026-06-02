/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Manrope", "sans-serif"],
        display: ["Sora", "sans-serif"],
      },
      colors: {
        surface: {
          light: "#f8f6ff",
          dark: "#0f1223",
        },
      },
      boxShadow: {
        glass: "0 10px 30px rgba(88, 102, 163, 0.18)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        float: "float 8s ease-in-out infinite",
        gradient: "gradient 18s ease infinite",
      },
    },
  },
  plugins: [],
};