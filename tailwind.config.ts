import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#fff7ed",
          100: "#ffedd5",
          500: "#b91c1c",
          600: "#991b1b",
          700: "#7f1d1d",
          900: "#3d0b0b"
        },
        gold: {
          400: "#d6a84c",
          500: "#bd8627"
        }
      },
      boxShadow: {
        panel: "0 18px 50px rgba(79, 26, 18, 0.08)"
      }
    }
  },
  plugins: []
} satisfies Config;

