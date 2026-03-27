/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Urbanist', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#155DFC',
          hover: '#0f4cd9',
        },
        accent: {
          DEFAULT: '#00C0F5',
          light: '#E6F9FF',
          transparent: 'rgba(0, 192, 245, 0.1)',
        },
        dark: {
          DEFAULT: '#0A0A0A',
          secondary: '#111111',
          footer: '#0F2351',
        },
        gray: {
          400: '#99A1AF',
          500: '#717182',
          600: '#666666',
          700: '#4A5565',
          50: '#F9FAFB',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(180deg, #F0F6FF 0%, #FEFFFF 100%)',
        'section-gradient': 'linear-gradient(180deg, #FEFFFF 0%, #F0F6FF 100%)',
      },
      boxShadow: {
        'card': '2px 8px 12px rgba(0, 0, 0, 0.09)',
        'btn': '0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -4px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [],
}
