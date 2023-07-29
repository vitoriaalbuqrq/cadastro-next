/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    'from-green-400',
    'from-blue-400',
    'from-gray-400',
    'to-gray-700',
    'to-blue-700',
    'to-green-700',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

