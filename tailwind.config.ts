import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/flowbite/**/*.ts'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        "brand-color": "#7037FF",
      },
      screens: {
        xs: "640px",
        sm: "768px",
        md: "1024px",
        lg: "1366px",
        xl: "1600px",
        "2xl": "1920px",
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
export default config
