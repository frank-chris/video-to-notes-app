module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    fontFamily: {
      'sans': ['Inter var'],
    }
  },
  daisyui: {
    themes: [ "winter", "emerald", "dark", "light",],
  },
  plugins: [
    require('daisyui'),
  ],
}
