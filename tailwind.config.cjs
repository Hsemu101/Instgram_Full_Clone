module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  content: [
     "./src/**/*.{js,jsx,ts,tsx}", // Add the paths to your content files
  ],
  theme: {
    extend: {
    screens:{
      'custom-lapotp' : '1657px', // Applies styles at 1657px and up
      'custom-large': '1870px', // Applies styles at 1870px and up
      'max-639': {max: '639px'}
    }
    },
  },
  plugins: [],
};




