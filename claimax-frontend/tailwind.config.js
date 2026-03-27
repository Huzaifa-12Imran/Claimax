/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FAF8F5',     // Creamy off-white 
        surface: '#FFFFFF',        // Pure white for cards inside the cream
        primary: '#1A365D',        // Deep Royal Navy
        secondary: '#D4AF37',      // Royal Gold
        accent: '#2C5282',         // Lighter Royal Blue for hovers
        cream: {
          50: '#FDFCFB',
          100: '#FAF8F5',
          200: '#F2EFE9',
          300: '#EAE5DB',
        },
        royal: {
          900: '#112240',
          800: '#1A365D',
          700: '#2A4365',
          gold: '#D4AF37',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Syne', 'sans-serif'], // Elegant display font like the reference
      },
      boxShadow: {
        'soft': '0 10px 40px -10px rgba(26, 54, 93, 0.05)',
        'soft-hover': '0 20px 50px -15px rgba(26, 54, 93, 0.1)',
        'royal': '0 4px 20px -2px rgba(212, 175, 55, 0.2)', // Gold glow
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
