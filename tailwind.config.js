/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens:{
      xsm: '380px',
      xm: '480px',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1280px',
      '2xl': '1536px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '2rem',
       
      },
    
    },
    extend: {
      boxShadow: {
        sm: "0px 10px 25px rgba(0, 62, 92, 0.04)",
        md: "0px 30px 60px rgba(0, 62, 92, 0.04)",
      },
    },
  },
  plugins: [],
}
