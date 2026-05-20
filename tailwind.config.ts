import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        linen: "rgb(var(--color-bg) / <alpha-value>)",
        "linen-deep": "rgb(var(--color-bg-deep) / <alpha-value>)",
        "linen-dark": "rgb(var(--color-bg-dark) / <alpha-value>)",
        ink: "rgb(var(--color-ink) / <alpha-value>)",
        charcoal: "rgb(var(--color-primary) / <alpha-value>)",
        forest: "rgb(var(--color-primary) / <alpha-value>)",
        "forest-soft": "rgb(var(--color-forest-soft) / <alpha-value>)",
        sage: "rgb(var(--color-accent) / <alpha-value>)",
        terracotta: "rgb(var(--color-accent-warm) / <alpha-value>)",
        "terracotta-soft": "rgb(var(--color-accent-warm) / <alpha-value>)",
        straw: "rgb(var(--color-secondary) / <alpha-value>)",
        taupe: "rgb(var(--color-muted) / <alpha-value>)",
        line: "rgb(var(--color-line) / <alpha-value>)",
      },
      fontFamily: {
        display: ["var(--font-display)", "Cormorant Garamond", "serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        script: ["var(--font-script)", "cursive"],
      },
      letterSpacing: {
        widest: "0.28em",
        wide: "0.16em",
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
