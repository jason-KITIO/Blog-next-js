import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}", 
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        blancD9: "var(--blancD9)",
        gris6b: "var(--gris6b)",
        gridad: "var(--gridad)",
        violet: "var(--violet)",
        violetHover: "var(--violetHover)",

        bgNewsLetter: "#050318",
        bgHoverCategorie: "#050218",
        violetFoncer: "#AB10B3",
        vert: "#08AD26",

        bgBash: "#1B1646",
        bgTopBash: "#484343",
        btnRed: "#B23535",
        btnYellow: "#F9D405",
        btnGreen: "#00A400",
      },
      fontFamily: {
        inter: ['var(--font-inter)', 'sans-serif'],
        archivo: ['var(--font-archivo)', 'sans-serif'],
        archivoBlack: ['var(--font-archivoBlack)'],
        alexandria: ['var(--font-alexandria)'],
      },
      backgroundImage: {
        'Intersect': "url('/images/Intersect.svg')",
      },
      borderRadius: {
        'footer': '0px 0px 150px 150px', // Ajoutez votre valeur personnalisée ici
      },
    },
  },
  plugins: [],
} satisfies Config;
