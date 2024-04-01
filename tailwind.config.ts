import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      screens: {
        xs: '380px',
      },
      gridTemplateColumns: {
        career: '11rem 1fr',
      },
      fontFamily: {
        sans: [
          'var(--font-geist-sans)',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
        ],
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        strong: 'var(--strong)',
        highlighted: 'var(--highlighted)',
        primary: 'var(--primary)',
        muted: {
          50: 'var(--muted-50)',
          100: 'var(--muted-100)',
        },
        card: {
          DEFAULT: 'var(--card)',
          foreground: 'var(--card-foreground)',
        },
        border: {
          50: 'var(--border-50)',
          100: 'var(--border-100)',
        },
      },
      animation: {
        'bounce-slow': 'bounce-slow 1.5s infinite',
      },
      keyframes: {
        'bounce-slow': {
          '0%, 100%': {
            transform: 'translateY(-50%)',
            'animation-timing-function': 'cubic-bezier(0.5, 0, 1, 1)',
          },
          '50%': {
            transform: 'translateY(0)',
            'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)',
          },
        },
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
}
export default config
