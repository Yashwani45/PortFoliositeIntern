export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', "sans-serif"],
        sans: ['Inter', "sans-serif"],
      },
      colors: {
        background: "#0f1419",
        surface: "#1c2230",
        foreground: "#f1f5f9",
        muted: "#8a94a6",
        primary: "#22d3ee",
        accent: "#e879f9",
        border: "#2a3142",
      },
      keyframes: {
        "fade-up": { "0%": { opacity: 0, transform: "translateY(24px)" }, "100%": { opacity: 1, transform: "translateY(0)" } },
        float: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-12px)" } },
        blob: {
          "0%,100%": { transform: "translate(0,0) scale(1)" },
          "33%": { transform: "translate(30px,-50px) scale(1.1)" },
          "66%": { transform: "translate(-20px,20px) scale(0.95)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out both",
        float: "float 6s ease-in-out infinite",
        blob: "blob 18s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
