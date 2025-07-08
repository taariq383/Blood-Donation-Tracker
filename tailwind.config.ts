import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-poppins)", "system-ui", "sans-serif"],
      },
      colors: {
        red: {
          600: "#DC2626",
          700: "#B91C1C",
          800: "#991B1B",
        },
        blue: {
          600: "#2563EB",
          700: "#1D4ED8",
        },
        emerald: {
          500: "#10B981",
          600: "#059669",
          700: "#047857",
        },
        amber: {
          500: "#F59E0B",
        },
        slate: {
          50: "#F8FAFC",
          800: "#1E293B",
          900: "#0F172A",
        },
      },
      spacing: {
        "280": "280px",
      },
      animation: {
        "pulse-gentle": "pulse-gentle 2s ease-in-out infinite",
        "emergency-pulse": "emergency-pulse 2s infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config