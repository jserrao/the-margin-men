/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        md: '1rem', // 16px - same as text-base
      },
      fontFamily: {
        baskerville: ['"Libre Baskerville"', 'serif'],
      },
    },
  },
  plugins: [],
};
