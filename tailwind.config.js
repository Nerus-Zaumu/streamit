/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkGray: "#111111",
        brightRed: "#E50914",
        dark: '#141414'
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
      },
      backgroundImage: {
        "hero-image": "url('/images/hero-image.jpg')",
      },
      keyframes: {
        link: {
          "0%": {
            opacity: 1,
            color: 'white'
          },
          "100%": {
            opacity: 1,
            color: '#E50914'
          },
        },
        dropdownFull: {
          "0%": {
            opacity: 0,
            // transform: "translateY(-100%)"
          },
          "100%": {
            opacity: 1,
            // transform: "translateY(0)"
          },
        },
        icons: {
          "0%": {
            background: "#111111",
          },
          "100%": {
            background: "#808080",
          },
        },
        iconsReverse: {
          "0%": {
            opacity: 1,
            background: "#808080",
          },
          "100%": {
            background: "#111111",
          },
        
        }
      },
      animation: {
        link: 'link 2s forwards',
        'dropdown-full': 'dropdownFull 2s forwards',
        "icons": "icons 2s forwards",
        "icons-reverse": "iconsReverse 2s forwards"
      }
    },
  },
  plugins: [],
}