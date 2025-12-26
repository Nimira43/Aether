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
  			'grey-dark': '#333',
  			'grey-medium': '#999',
  			'grey-light': '#ccc',
  			'grey-light-extra': '#eee',
  			'grey-1': '#333',
  			'grey-2': '#999',
  			'grey-3': '#ccc',
  			'grey-4': '#eee',
      },
    },
  },
  plugins: [],
}

