/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "var(--border)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: "var(--card)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
      },
      keyframes: {
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-subtle": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.8" },
        },
        "fade-in": {
          "from": { 
            opacity: "0",
            transform: "translateY(20px)",
          },
          "to": { 
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "wave": {
          "0%, 100%": { 
            transform: "translateX(0) translateY(0)",
          },
          "50%": { 
            transform: "translateX(15px) translateY(-5px)",
          },
        },
        "bubble-float": {
          "0%": { 
            transform: "translateY(0) scale(1)",
            opacity: "1",
          },
          "50%": { 
            transform: "translateY(-20px) scale(1.05)",
            opacity: "0.7",
          },
          "100%": { 
            transform: "translateY(0) scale(1)",
            opacity: "1",
          },
        },
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "pulse-subtle": "pulse-subtle 4s ease-in-out infinite",
        "fade-in": "fade-in 0.7s ease-out forwards",
        "fade-in-delay-1": "fade-in 0.7s ease-out 0.2s forwards",
        "fade-in-delay-2": "fade-in 0.7s ease-out 0.4s forwards",
        "fade-in-delay-3": "fade-in 0.7s ease-out 0.6s forwards",
        "fade-in-delay-4": "fade-in 0.7s ease-out 0.8s forwards",
        "wave": "wave 6s ease-in-out infinite",
        "bubble-float": "bubble-float 8s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
