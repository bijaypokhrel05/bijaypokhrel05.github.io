/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          brown: '#483519',
          black: '#000000',
          terracotta: '#c57b57',
          gold: '#e4cc37',
          sage: '#9bc4bc',
        },
      },
    },
  },
  plugins: [],
};
