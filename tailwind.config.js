module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        flip: {
          '0%, 50%': { transform: 'rotateY(0deg)' },
          '50.01%, 100%': { transform: 'rotateY(180deg)' },
        },
      },
      animation: {
        flipCard: 'flip 6s infinite',
      },
    },
  },
  plugins: [],
};
