import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-1': "url('https://i.postimg.cc/XqNkhHbj/sports-1.webp')",
      },
    },
  },
  plugins: [daisyui],
}

