/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
       fontFamily: {
        bromello: ['bromello', 'cursive'], // fallback to cursive
        adelia: ['adelia', 'cursive'],
        photograph: ['photograph-signature', 'cursive'],
        cinzel: ['cinzel', 'serif'],
      },
      colors: {
        primary: '#4B5563',
        ivory: '#fffff0'
      }
    },
  },
  plugins: [],
}

