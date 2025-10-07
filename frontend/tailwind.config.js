/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main': '#ff4500',
  			'support': '#008080',
  			'light': '#fffcfa',
  			'dark': '#111',
  			'grey-dark': '#333',
  			'grey-medium': '#898989',
  			'grey-light': '#ccc',
  			'grey-light-extra': '#eee',
      },
    },
  },
  plugins: [],
}

