/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
     
        'ipad-pro': {'min':'1366px','max':'1366px'},
        'ipad-prov': {'min':'1024px','max':'1024px'},
        'ip14': {'min':'430px','max':'430px'},
        'ipad-h': {'min':'1080px','max':'1080px'},
        'ip12': {'min':'390px','max':'390px'},
        'se': {'min':'375px','max':'375px'},
      },
    },
  },
  plugins: [],
}

