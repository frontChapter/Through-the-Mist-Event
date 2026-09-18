import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-dana)', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['var(--font-dana)', 'Georgia', 'serif'],
        mono: ['var(--font-dana)', 'monospace'],
      },
    },
  },
  plugins: [],
};

export default config;
