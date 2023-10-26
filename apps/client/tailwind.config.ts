import { Config } from "tailwindcss/types/config";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2d3346"
      }
    },
  },
  plugins: [],
}

export default config;