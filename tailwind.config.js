
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./src/front/js/pages/**/*.{html,js}",
  "./src/front/js/component/**/*.{html,js}",
  "./template.html",],
  theme: {
    extend: {},
  },
  plugins: [
      // ...
      require('@tailwindcss/forms'),
  ],
}
