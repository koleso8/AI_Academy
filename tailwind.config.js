/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'bg-pattern': "url('/public/background.png')",
      },
    },
  },
  plugins: [],
};
