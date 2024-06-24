/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./containers/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'main': ['Roboto'],
        'condensed': ['__Roboto_Condensed_16d813', '__Roboto_Condensed_Fallback_16d813']
      },
      colors: {
        'primary': '#5BBA6F',
        'text': '#F5F5F5',
        'background': '#222222'
      },
      fontSize: {
        'heading': '120px',
        'section': '36px',
        'body': '20px',
        'small': '16px'
      }
    },
  },
  plugins: [],
};
