/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main': '#2965dc',
        'main-light': '#8ec5f6',
  			'support': '#f62222',
        'gold': '#ffd700',
  			'light': '#fbfdff',
  			'dark': '#111',
  			'grey-1': '#333',
  			'grey-2': '#999',
  			'grey-3': '#ccc',
        'grey-4': '#eee',
        'grey-5': '#f5f5f5'
      },
    },
  },
  plugins: [],
}

