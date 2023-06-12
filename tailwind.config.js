/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './stories/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        teal: '#038B91',
        green: '#4D9979',
        peach: '#FA9A5D',
        yellow: '#FEBF10',
        yellowlight: '#FFEDBC',
        grey: '#BCBCBC',
      },
      boxShadow: {
        shadow: '-4px 4px rgba(0, 0, 0, 0.9)',
      },
      borderRadius: {
        round: '4px',
      },
      width: {
        8.5: '31px',
        25: '6.25rem',
        18: '4.5rem',
      },
      height: {
        8.5: '31px',
        15: '3.75rem',
      },
      borderWidth: {
        3: '3px',
      },
    },
    plugins: [],
  },
};
