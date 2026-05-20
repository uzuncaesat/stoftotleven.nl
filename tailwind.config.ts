import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Brand tokens — matched to stoftotleven.nl spec */
        linen: "rgb(var(--color-bg) / <alpha-value>)",          /* #FFFFFF */
        "linen-deep": "rgb(var(--color-bg-deep) / <alpha-value>)", /* #E9D9C3 cream */
        "linen-dark": "rgb(var(--color-bg-dark) / <alpha-value>)", /* #2F4C48 teal */
        ink: "rgb(var(--color-ink) / <alpha-value>)",
        /* Aliases — kept for legacy class usage */
        charcoal: "rgb(var(--color-primary) / <alpha-value>)",
        forest: "rgb(var(--color-primary) / <alpha-value>)",       /* #2F4C48 */
        "forest-soft": "rgb(var(--color-forest-soft) / <alpha-value>)",
        sage: "rgb(var(--color-accent) / <alpha-value>)",          /* #91A2A1 */
        terracotta: "rgb(var(--color-accent-warm) / <alpha-value>)", /* now cream */
        "terracotta-soft": "rgb(var(--color-accent-warm) / <alpha-value>)",
        straw: "rgb(var(--color-secondary) / <alpha-value>)",      /* #E9D9C3 */
        taupe: "rgb(var(--color-muted) / <alpha-value>)",
        line: "rgb(var(--color-line) / <alpha-value>)",
      },
      fontFamily: {
        display: ["var(--font-display)", "Halant", "Georgia", "serif"],
        sans: ["var(--font-body)", "Roboto", "Helvetica", "Arial", "sans-serif"],
        script: ["var(--font-script)", "Alex Brush", "cursive"],
      },
      letterSpacing: {
        widest: "0.28em",
        wide: "0.16em",
      },
      borderRadius: {
        /* Sharp / flat — spec says 0 globally */
        DEFAULT: "0px",
        none: "0px",
        sm: "0px",
        md: "0px",
        lg: "0px",
        xl: "0px",
        "2xl": "0px",
        "3xl": "0px",
        full: "0px",
      },
      maxWidth: {
        prose: "62ch",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        "draw-thread": {
          from: { strokeDashoffset: "1" },
          to: { strokeDashoffset: "0" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-14px) rotate(2deg)" },
        },
        "grain-shift": {
          "0%, 100%": { transform: "translate(0, 0)" },
          "20%": { transform: "translate(-5%, 5%)" },
          "40%": { transform: "translate(3%, -8%)" },
          "60%": { transform: "translate(-7%, 3%)" },
          "80%": { transform: "translate(6%, 6%)" },
        },
      },
      animation: {
        "float-slow": "float-slow 9s ease-in-out infinite",
        "grain-shift": "grain-shift 8s steps(5) infinite",
      },
    },
  },
  plugins: [],
};

export default config;
