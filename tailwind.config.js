/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        "YekanBakh-Light": "YekanBakh-Light",
        "YekanBakh-Regular": "YekanBakh-Regular",
        "YekanBakh-Medium": "YekanBakh-Medium",
        "YekanBakh-Bold": "YekanBakh-Bold",
        "YekanBakh-Heavy": "YekanBakh-Heavy",
        "YekanBakh-Fat": "YekanBakh-Fat",

      }
    },
  },
  plugins: [function ({ addVariant }) {
    addVariant('child', "& > *")
    addVariant('child-hover', "& > *:hover")
  }],
};
