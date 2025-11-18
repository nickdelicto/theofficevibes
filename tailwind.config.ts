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
        // Fun, playful brand colors for The Office Vibes
        primary: {
          DEFAULT: '#3B82F6', // Bright blue - friendly & energetic
          dark: '#2563EB',
          darker: '#1E40AF',
          light: '#60A5FA',
        },
        secondary: {
          DEFAULT: '#FB923C', // Vibrant orange - fun & warm (Friday vibes)
          dark: '#F97316',
          light: '#FDBA74',
        },
        accent: {
          DEFAULT: '#FCD34D', // Soft yellow - happiness (like coffee ☕)
          dark: '#FBBF24',
          light: '#FDE68A',
        },
        background: {
          DEFAULT: '#FFFBEB', // Warm cream/off-white - inviting
          secondary: '#FEF3C7',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;

