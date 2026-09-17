tailwind.config = {
  theme: {
    extend: {
      colors: {
        'ts-black': '#000000',
        'ts-blue': '#4A70A9',
        'ts-light-blue': '#8FABD4',
        'ts-beige': '#EFECE3',
      },
      fontFamily: {
        cairo: ['Cairo', 'sans-serif'],
      },
      transitionDuration: {
        400: '400ms',
      },
      animation: {
        'float-slow': 'floatSlow 8s ease-in-out infinite',
        'float-medium': 'floatMedium 6s ease-in-out infinite',
        'glow-pulse': 'glowPulse 4s ease-in-out infinite',
        'gradient-shift': 'gradientShift 8s ease infinite',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'twinkle': 'twinkle 3s ease-in-out infinite',
      },
    },
  },
};