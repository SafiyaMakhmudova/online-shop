/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#3BB77E',
        orange: '#fcb900',
        text: '#254588',
        gray: '#929EA6',
        green: '#cdebbc',
        metalic: '#F4F6FA',
        black: '#1F1E1B',
        text: '#253D4E'
      }
    }
  },
  plugins: []
};
