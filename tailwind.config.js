/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "yellow-1" : "#d7ff68"
      },
      fontFamily: {
        "Dana" : "Dana",
        "DanaM" : "Dana Medium",
        "DanaB" : "Dana DemiBold",
        "Morabba" : "Morabba Light",
        "MorabbaM" : "Morabba Medium",
        "MorabbaB" : "Morabba Bold",
      },
      screens: {
        'xs': '480px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      }
    },
  },
  plugins: [],
}