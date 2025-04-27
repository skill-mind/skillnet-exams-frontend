import type { Config } from "tailwindcss";

export default {
  darkMode: "media",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background-start-rgb)",
        foreground: "var(--foreground-rgb)",
      },
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"],
      },
      boxShadow: {
        circle: "0px 4px 4px 0px #FFFFFF40 inset",
        curve:
          "0px 0px 20.97px 0px #FFFFFF 0px 0px 41.94px 0px #FFFFFF 0px 0px 146.79px 0px #FFFFFF 0px 0px 250px 0px #FFFFFF",
      },
    },
  },
  plugins: [],
} satisfies Config;
