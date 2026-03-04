/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        obsidian: '#1C1917',
        'obsidian-light': '#292524',
        terra: '#C4956A',
        'terra-dark': '#A67B52',
        'terra-light': '#D4AB82',
        ivory: '#F5F0EB',
        slate: '#44403C',
        sage: '#8C7B6B',
        'sage-dark': '#6B5D4D',
        'sage-light': '#A89886',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '3rem',
        '6xl': '4rem',
      },
    },
  },
  plugins: [],
}
