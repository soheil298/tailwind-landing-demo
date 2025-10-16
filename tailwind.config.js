/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
     container: {
        center: true,
      },
    extend: {
      fontFamily: {
        vazir: ['Vazir', 'Tahoma', 'sans-serif'],
      },
    }
  },
 
  plugins: [require('daisyui')],
  daisyui: {
    themes: ["light"], // فقط حالت روشن
    darkTheme: "light", // حتی اگر سیستم تاریک باشد، light استفاده شود
    base: true,
    styled: true,
    utils: true,
    prefix: "",
    logs: true,
    themeRoot: ":root",
  },
}