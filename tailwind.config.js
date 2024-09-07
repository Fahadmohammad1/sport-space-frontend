/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ss-primary': "#6C48C5",
        'ss-secondary': "#C68FE6",
        'ss-extra': "#1230AE"
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}