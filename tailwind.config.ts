import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          DEFAULT: '#080B10',
          50: '#F4F5F7',
          100: '#E4E7EB',
          200: '#CBD0D7',
          700: '#1C2433',
          800: '#121721',
          900: '#080B10',
        },
        champagne: {
          DEFAULT: '#C9A86A',
          hover: '#B59456',
          light: '#E5D1AD',
          soft: 'rgba(201, 168, 106, 0.12)',
        },
        platinum: '#F4F5F8',
        silver: '#9AA4B2',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-cinzel)', 'Georgia', 'serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
};

export default config;
