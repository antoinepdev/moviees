/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: "#121212",
        title: "#EAEAEA",
        subtitle: "#B0BEC5",
        secondary: "#1E1E1E",
        btn: "#9C27B0",
      },
      spacing: {
        primary : "16px",
        secondary : "32px"
      }
    },
  },
  plugins: [],
}
