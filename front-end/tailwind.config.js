/** @type {import('tailwindcss').Config} */

module.exports = {

  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],

  theme: {
    extend: {
      backgroundImage: {
        'under-knee': 'url(\'/src/images/underknee-nobg.png\'',
      },
    },
  },

  plugins: [],

};
