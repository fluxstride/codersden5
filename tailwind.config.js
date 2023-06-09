module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        // 'form-left': "url(\"src/assets/form-bg-1.png\")",
      },
      colors: {
        "primary-100": "#3284FF",
        "primary-200": "#4991FF",
        "primary-300": "#0065FE",
        "primary-400": "#005AE2",
        "main-text": "#141414",
      },
    },
  },
  plugins: [],
};
