/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      backgroundColor:{
        LightRed : 'hsl(0, 100%, 67%)',
        OrangeyYellow : 'hsl(39, 100%, 56%)',
        GreenTeal : 'hsl(166, 100%, 37%)',
        CobaltBlue : 'hsl(234, 85%, 45%)'
      },
      fontFamily:{
        'Hanken' : 'Hanken Grotesk , sans-serif'
      }
    },
  },
  plugins: [],
}

