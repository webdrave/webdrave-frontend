/** @type {import('tailwindcss').Config} */
export default  {
	content: [
	  "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
	  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
	  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
	  extend: {
		colors: {
		  primary:"#5b68e4",
		  secondary:"#5B68E4",
		  dark:"#0a0a0a",
		  light:"#fff",
		},
		fontFamily: {
		  primary: ["American Captain","sans-serif"],
		  secondary: ["Montserrat", "serif"],
		  silkserif: ["Silk Serif", "serif"],
		},  
	  },
	},
	plugins: [],
  };