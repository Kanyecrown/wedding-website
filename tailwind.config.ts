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
        primary: {
          DEFAULT: "#0F1A3D",
          light: "#1B2A5E",
        },
        gold: {
          DEFAULT: "#B8892B",
          light: "#D8B96A",
        },
        ivory: {
          DEFAULT: "#FBF8F2",
          dark: "#F4EFE6",
        },
        peach: {
          DEFAULT: "#E8A98A",
        },
      },
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        script: ["var(--font-great-vibes)", "cursive"],
        body: ["var(--font-cormorant)", "serif"],
        caps: ["var(--font-cinzel)", "serif"],
      },
      letterSpacing: {
        widest: "0.25em",
        super: "0.4em",
      },
    },
  },
  plugins: [],
};
export default config;