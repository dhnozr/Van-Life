/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        ınter: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'hero-banner': "url('/image54.jpg')",
      },
    },
  },
  plugins: [],
};
