module.exports = {
  mode: 'jit',
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: {
          DEFAULT: '#959595',
          dark: '#2C2C2C',
          light: '#F1F1F1',
        },
        blue: {
          DEFAULT: '#2A48FF',
        },
        red: {
          DEFAULT: '#B72323',
          light: '#DB3939',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
