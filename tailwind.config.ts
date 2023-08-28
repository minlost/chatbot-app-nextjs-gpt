import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        smoke1: {
          "0%": {
            filter: "blur(0px)",
            transform: "translateY(0px) scale(-1, 1)",
            opacity: "0",
          },
          "25%": {
            filter: "blur(3px)",
            transform: "translateY(-10px) scale(-1, 1.05)",
            opacity: "0.5",
          },
          "50%": {
            filter: "blur(5px)",
            transform: "translateY(-20px) scale(-1, 1.1)",
            opacity: "1",
          },
          "75%": {
            filter: "blur(5px)",
            transform: "translateY(-30px) scale(-1, 1.15)",
            opacity: "0.5",
          },
          "100%": {
            filter: "blur(7px)",
            transform: "translateY(-40px) scale(-1, 1.2)",
            opacity: "0",
          },
        },
        smoke2: {
          "0%": {
            filter: "blur(0px)",
            transform: "translateY(0px) scale(1)",
            opacity: "0",
          },
          "25%": {
            filter: "blur(3px)",
            transform: "translateY(-10px) scale(1.05)",
            opacity: "0.5",
          },
          "50%": {
            filter: "blur(5px)",
            transform: "translateY(-20px) scale(1.1)",
            opacity: "1",
          },
          "75%": {
            filter: "blur(5px)",
            transform: "translateY(-30px) scale(1.15)",
            opacity: "0.5",
          },
          "100%": {
            filter: "blur(7px)",
            transform: "translateY(-40px) scale(1.2)",
            opacity: "0",
          },
        },
        smoke3: {
          "0%": {
            filter: "blur(0px)",
            transform: "translateY(0px) scale(1)",
            opacity: "0",
          },
          "25%": {
            filter: "blur(3px)",
            transform: "translateY(-20px) scale(1.05)",
            opacity: "0.5",
          },
          "50%": {
            filter: "blur(5px)",
            transform: "translateY(-40px) scale(1.1)",
            opacity: "1",
          },
          "75%": {
            filter: "blur(5px)",
            transform: "translateY(-60px) scale(1.15)",
            opacity: "0.5",
          },
          "100%": {
            filter: "blur(7px)",
            transform: "translateY(-80px) scale(1.2)",
            opacity: "0",
          },
        },
      },
      animation: {
        smoke1: "smoke1 3s ease-in-out infinite",
        smoke2: "smoke2 3s ease-in-out infinite",
        smoke3: "smoke3 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
}

export default config
