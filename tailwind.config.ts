import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#5A7FFF',
        secondary: '#6DF192',
      },
      gridTemplateColumns: {
        sm: 'repeat(auto-fit, minmax(160px, 1fr))',
      },
    },
  },
  plugins: [],
};
export default config;
