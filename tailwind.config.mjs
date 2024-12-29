/** @type {import('tailwindcss').Config} */
export default  {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'american-captain': ['American Captain', 'sans-serif'], // Custom font
        'league-spartan': ['League Spartan', 'sans-serif'], // Custom font
        'montserrat': ['Montserrat', 'sans-serif'], // Custom font
      },
      fontWeight:{
        normal:400,
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary:"#5b68e4",
        secondary:"#f7f7f7",
      },
      boxShadow: {
        custom: '0px 0px 60px -69px #1C3350',
      },
      fontFamily: {
        americanCaptain: ["American Captain","sans-serif"],
        montserrat: ["Montserrat", "serif"],
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
      },
      keyframes: {
          'infinite-scroll': {
              from: { transform: 'translateX(0)' },
              to: { transform: 'translateX(-100%)' },
          }
      },    
    },
  },
  plugins: [],
};
