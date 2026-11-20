import { heroui } from "@heroui/react"

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      colors: {
        'light-muted': "#999999",
        'dark-muted': "#303030",
        'sm-muted': '#6C6C6C',
        'muted': "#E2E2E2",
        'orange': "#ffe46c",
        primary: {
          DEFAULT: "#0A0A0A",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#E9C663",
          foreground: "#ffffff",
        },
        danger: {
          DEFAULT: "#e61920",
          foreground: "#ffffff",
        },
      },
      screens: {
        'tab-screen': { 'max': '1450px' },
        'md-screen': { 'max': '1050px' },
        'sm-screen': { 'max': '850px' },
        'mob-screen': { 'max': '500px' },
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
}
