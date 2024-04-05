export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      desktop: '700px',
    },
    extend: {
      boxShadow: {
        'btn-shadow': '6px 7px black',
        'btn2-shadow': '-6px 7px black',
        sound: '4px 4px black',
        'pause-sadow': '8px 8px black',
      },

      colors: {
        'gradient-color': 'rgba(48, 47, 47, 0.57)',
        'custom-pink': '#FD70A2',
        'custom-blue': '#AAE1F4',
        'custom-gray': '#C3C3C3',
        'custom-pink2': '#FECADC',
        'custom-gray2': '#B8B8B8',
      },
      backgroundImage: {
        'bg-main': 'url("/src/assets/images/backgrounds/main-bg.png")',
        'main-full-bg': 'url("/src/assets/images/backgrounds/main-full-bg.png")',

        'comics-angel-1': 'url("/src/assets/images/backgrounds/angel-1.png")',
        'comics-angel-2': 'url("/src/assets/images/backgrounds/angel-2.png")',
        'comics-angel-3': 'url("/src/assets/images/backgrounds/angel-3.png")',

        share: 'url("/src/assets/images/backgrounds/share.png")',
        'result-1': 'url("/src/assets/images/backgrounds/result-1.png")',
        'result-2': 'url("/src/assets/images/backgrounds/result-2.png")',
        'result-3': 'url("/src/assets/images/backgrounds/result-3.png")',
      },

      keyframes: {
        handMove: {
          '0%': { transform: 'translateX(0px)' },
          '50%': { transform: 'translateX(-120px)' },
          '100%': { transform: 'translateX(0px)' },
        },

        screenMove: {
          '0%': { backgroundPosition: 'center' },
          '50%': { backgroundPosition: '60% 50%' },
          '100%': { backgroundPosition: 'center' },
        },

        'fly-heart': {
          '0%': { transform: 'translateY(0) scale(1)' },
          // '50%': { transform: 'translateY(-100px) scale(0.8)' },
          '100%': { transform: 'translateY(-150px) scale(0.6)', opacity: '0' },
        },
      },
      animation: {
        handMove: 'handMove 4s infinite',
        screenMove: 'screenMove 4s infinite',
        'fly-heart': 'fly-heart 3s infinite',
      },
    },
  },
  plugins: [],
}

