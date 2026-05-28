/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#0A2240',
        'brand-dark': '#061628',
        'brand-glow': 'rgba(10,34,64,0.18)',
        accent: '#FF6B00',
        'accent-dark': '#e05e00',
        black: {
          DEFAULT: '#ffffff',
          2: '#f4f6fb',
          3: '#eaeff7',
          4: '#dde3ee',
        },
        'off-white': '#0A2240',
        gray: {
          DEFAULT: '#5a6a7e',
          2: '#3d4f63',
        },
      },
      fontFamily: {
        sans: ['Satoshi', 'Inter', 'sans-serif'],
        heading: ['ClashGrotesk-Variable', 'Clash Grotesk', 'Satoshi', 'sans-serif'],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #0A2240 0%, #1a4a7a 60%, #FF6B00 100%)',
        'text-gradient':  'linear-gradient(135deg, #0A2240 0%, #1a4a7a 100%)',
      },
    },
  },
  plugins: [],
};
