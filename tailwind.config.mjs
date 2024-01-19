/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "main-color": {
          50: "#f5f1ff",
          100: "#ede6ff",
          200: "#dcd0ff",
          300: "#c2aaff",
          400: "#a67aff",
          500: "#8d44ff",
          600: "#831eff",
          700: "#6d0ae6",
          800: "#620acd",
          900: "#520aa8",
          950: "#310372",
        },
      },
      animation: {
        "background-shine": "background-shine 2s linear infinite",
      },
      keyframes: {
        "background-shine": {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
      },
    },
  },
  plugins: [],
};
