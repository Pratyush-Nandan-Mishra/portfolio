import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  extend: {
    colors: {
      accent: "#22d3ee",
    },
    animation: {
      'scroll-left': 'scrollLeft 30s linear infinite',
    },
    keyframes: {
      scrollLeft: {
        '0%':   { transform: 'translateX(0)' },
        '100%': { transform: 'translateX(-50%)' },
      },
    },
  },
},
  plugins: [],
};

export default config;
