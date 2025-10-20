/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        'background-light': '#717171ff',
        'background-dark': '#191919',
        'card-light': '#FFFFFF',
        'card-dark': '#171C3A',
        'text-light': '#1F2937',
        'text-dark': '#E5E7EB',
        'text-secondary-light': '#6B7280',
        'text-secondary-dark': '#9CA3AF',
        'border-light': '#E5E7EB',
        'border-dark': '#374151',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '1rem',
        lg: '2rem',
        xl: '3rem',
      },
    },
  },
  plugins: [],
}