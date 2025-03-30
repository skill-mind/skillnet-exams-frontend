import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
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
        "text-primary": {
          DEFAULT: "#000000",
          dark: "#FFFFFF",
        },
        "text-secondary": {
          DEFAULT: "#4A5568",
          dark: "#CBD5E0",
        },
      },
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
