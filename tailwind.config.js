/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'geek-black': '#0a0a0a',
        'geek-green': '#00ff41',
        'geek-dark': '#111111',
      },
      fontFamily: {
        mono: ['"Fira Code"', 'monospace'],
      }
    },
  },
  plugins: [],
}
