/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        "pi-purple-main": "#8962ed",
        "pi-purple-shadow": "#433773",
        "pi-purple-dark": "#2f1e4b",
        "pi-offwhite-main": "#f2f3f7",
        "pi-offwhite-shadow": "#d9dce4",
        "pi-grey-main": "#56565680",
        btn: {
          background: "hsl(var(--btn-background))",
          "background-hover": "hsl(var(--btn-background-hover))",
        },
      },
      minWidth: {
        0: "0",
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        musicBar: "95%",
      },
      gridTemplateColumns: {
        "25/75": "1fr 4fr",
      },
    },
  },
  plugins: [],
};
