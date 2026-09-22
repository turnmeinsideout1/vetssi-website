import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy:           "#0C2340",
        "navy-mid":     "#1A3D5C",
        steel:          "#2E6E9E",
        "steel-light":  "#5A9DC0",
        cream:          "#F7F5F0",
        "warm-gray":    "#E8E4DC",
        "text-primary": "#1A1A1A",
        "text-muted":   "#5A6270",
        stage: {
          before:  "#1F5C7A",
          during:  "#2E6E9E",
          after:   "#46748C",
          measure: "#6A5B8A",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans:  ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        measure: "68ch",
      },
    },
  },
  plugins: [],
};

export default config;
