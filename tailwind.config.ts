import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        black: "#000",
        tomato: {
          "100": "#f1614a",
          "200": "rgba(241, 97, 74, 0.3)",
        },
        white: "#fff",
        goldenrod: "#ffbb37",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
        inconsolata: "Inconsolata",
        ligconsolata: "Ligconsolata",
      },
      borderRadius: {
        "2xs": "11px",
      },
    },
    fontSize: {
      "18xl": "37px",
      "11xl": "30px",
      inherit: "inherit",
    },
  },
  plugins: [],
}
export default config
