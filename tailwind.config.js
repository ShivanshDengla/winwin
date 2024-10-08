/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
 animation: {
        marquee: 'marquee 40s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      fontFamily: {
        'roboto-mono': ['"Roboto Mono"', 'monospace'],
        'inter': ['Inter', 'sans-serif'],
      },
      fontSize: {
        'xl': '20px',
      },
      lineHeight: {
        'custom': '26.38px',
        'inter': '24.2px',
      },
    },
  },
  plugins: [],
}
