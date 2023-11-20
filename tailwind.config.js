/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        barlow: ['Barlow'],
        trebuchetMs: ['Trebuchet MS'],
      },
      colors: {
        traeGreen1: "#93e4c1",
        traeGreen2: "#3baea0",
        traeGreen3: "#118a7e",
        traeGreen4: "#1f6f78",
        traeGreen5: "#d3f6d1",
        traeGreen6: "#a7d7c5",
        traeGreen7: "#74b49b",
        traeGreen8: "#5c8d89",
        traeGreen9: "#CFFF04",
        traeGreen10: "#F0FFF0",
      },
    },
    screens: {
      'sm': '320px',
      'md': '480px',
      'lg': '768px',
      'xl': '992px',
      '2xl': '1200px',
    },
  },
  plugins: [],
  darkMode: 'class',
}
