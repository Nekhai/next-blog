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
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: {
          light: '#fff',
          dark: '#101010FF',
          DEFAULT: '#000',
        },
        active: 'var(--active)'
      },
    },
    backgroundImage: {
      'home-bg': "url('/images/home-bg.jpg')",
    },
  },
  plugins: [],
};
export default config;
