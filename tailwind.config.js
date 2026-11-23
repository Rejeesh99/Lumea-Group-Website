/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/data/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        jet: '#08090D',
        charcoal: '#12151D',
        graphite: '#202630',
        cerulean: {
          DEFAULT: '#00AEEF',
          50: '#e6f7fd',
          100: '#cceefa',
          200: '#99dcf6',
          300: '#66cbf1',
          400: '#33b9ed',
          500: '#00AEEF',
          600: '#008bbf',
          700: '#00688f',
          800: '#004660',
          900: '#002330',
        },
        rose: {
          DEFAULT: '#FF2E88',
          50: '#ffeaf3',
          100: '#ffd6e7',
          200: '#ffadcf',
          300: '#ff85b7',
          400: '#ff5c9f',
          500: '#FF2E88',
          600: '#cc256d',
          700: '#991c52',
          800: '#661236',
          900: '#33091b',
        },
        silver: '#A7ADB8',
        lightbg: '#F5F7FA',
        // Distinct vertical accent colors:
        brand: {
          cyber: '#00AEEF',      // Cerulean Blue
          nursing: '#2DD4BF',    // Medical teal / reassuring clean cyan
          skill: '#FF2E88',      // Neon Rose
          go: '#F59E0B',         // Amber / International horizon gold
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['var(--font-outfit)', 'var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      boxShadow: {
        'glow-blue': '0 0 25px -5px rgba(0, 174, 239, 0.3)',
        'glow-rose': '0 0 25px -5px rgba(255, 46, 136, 0.3)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      }
    },
  },
  plugins: [],
}
