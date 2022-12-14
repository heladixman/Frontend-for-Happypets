module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    darkMode: 'class',
    theme: {
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
        display: ['Open Sans', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
        
      },
      extend: {
        fontSize: {
          14: '14px',
        },
        backgroundColor: {
          'button-bg': '#03C9D7',
          'main-bg': '#03C9D7',
          'main-dark-bg': '#20232A',
          'secondary-dark-bg': '#33373E',
          'light-gray': '#F7F7F7',
          'half-transparent': 'rgba(0, 0, 0, 0.5)',
          'card1': '#f3d9cf',
          'card2' : '#ff6f47',
        },
        colors:{
          'main-color': '#00df9a',
          'shadow-color': '#9dfadd',
          'gradient-color': '#08bf86',
          'card-grad1': '#f3d9cf',
          'card-grad2' : '#ff6f47'
        },
        borderWidth: {
          1: '1px',
        },
        borderColor: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
        width: {
          400: '400px',
          760: '760px',
          780: '780px',
          800: '800px',
          1000: '1000px',
          1200: '1200px',
          1400: '1400px',
        },
        height: {
          80: '80px',
        },
        minHeight: {
          590: '590px',
        },
        backgroundImage: {
          'hero-pattern':
            "url('https://i.ibb.co/MkvLDfb/Rectangle-4389.png')",
        },
      },
    },
    plugins: [],
  };