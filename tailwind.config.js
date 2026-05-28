/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#155DFC',
        'brand-dark': '#0e46c7',
        'brand-glow': 'rgba(21,93,252,0.35)',
        black: {
          DEFAULT: '#0d1117',
          2: '#161b22',
          3: '#1c2333',
          4: '#21262d',
        },
        'off-white': '#f0f6fc',
        gray: {
          DEFAULT: '#7d8590',
          2: '#b1bac4',
        },
      },
      fontFamily: {
        sans: ['Satoshi', 'Inter', 'sans-serif'],
        heading: ['ClashGrotesk-Variable', 'Clash Grotesk', 'Satoshi', 'sans-serif'],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #155DFC 0%, #4d8aff 50%, #7b5ea7 100%)',
        'text-gradient': 'linear-gradient(135deg, #fff 0%, #6b9fff 100%)',
      },
    },
  },
  plugins: [],
};
