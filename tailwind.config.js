import { mantineTheme } from './src/styles/theme.ts';

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  corePlugins: { preflight: false, },
  theme: {
    fontFamily: {
      'display': [mantineTheme.fontFamily],
      'body': [mantineTheme.fontFamily],
    },
    extend: {
      colors: {
        primary: mantineTheme.colors.primary[5],  // Mengambil warna utama (gunakan indeks sesuai kebutuhan)
        secondary: mantineTheme.colors.secondary[5],
      },
      spacing: {
        sm: mantineTheme.spacing.sm,
        md: mantineTheme.spacing.md,
        lg: mantineTheme.spacing.lg,
        xl: mantineTheme.spacing.xl,
      },
      borderRadius: {
        sm: mantineTheme.radius.sm,
        md: mantineTheme.radius.md,
        lg: mantineTheme.radius.lg,
      },
    },
  },
  plugins: [],
};
