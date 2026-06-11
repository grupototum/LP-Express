import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '40rem',
        md: '48rem',
        lg: '64rem',
        xl: '80rem',
        '2xl': '96rem',
      },
    },
    extend: {
      fontFamily: {
        geomanist: ['geomanist', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'geomanist-book': ['geomanist-book', 'geomanist', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['geomanist', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        surface: 'var(--surface)',
        elevated: 'var(--elevated)',
        'hover-surface': 'var(--hover-surface)',
        'warm-rust': 'var(--warm-rust)',
        'cool-graphite': 'var(--cool-graphite)',
        'brand-red': {
          DEFAULT: 'var(--brand-red)',
          bright: 'var(--brand-red-bright)',
          vibrant: 'var(--brand-red-vibrant)',
          light: 'var(--brand-red-light)',
        },
        'brand-blue': 'var(--brand-blue)',
        'brand-purple': {
          DEFAULT: 'var(--brand-purple)',
          bright: 'var(--brand-purple-bright)',
        },
        success: 'var(--success)',
        error: 'var(--error)',
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        totum: {
          dark: "var(--totum-dark)",
          red: "var(--totum-red)",
          white: "var(--totum-white)",
          "red-light": "var(--totum-red-light)",
          gray: "var(--totum-gray)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
