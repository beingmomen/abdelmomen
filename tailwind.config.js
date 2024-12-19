/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    minWidth: {
      aside: "260px",
      "aside-sm": "84px",
    },
    maxWidth: {
      aside: "260px",
      "aside-sm": "84px",
    },
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(to right, #0ea5ea, #0bd1d1, 51%, #0ea5ea)",
      },
      boxShadow: {
        ms: "0 2px 6px rgba(47, 43, 61, 0.14), 0 0 transparent, 0 0 transparent",
      },
      aspectRatio: {
        auto: "auto",
        square: "1 / 1",
        video: "16 / 9",
      },
      animation: {
        "shiny-text": "shiny-text 8s infinite",
      },
      keyframes: {
        "shiny-text": {
          "0%, 90%, 100%": {
            "background-position": "calc(-100% - var(--shimmer-width)) 0",
          },
          "30%, 60%": {
            "background-position": "calc(100% + var(--shimmer-width)) 0",
          },
        },
      },
    },
  },

  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".main-title": {
          "@apply bg-custom-gradient bg-clip-text": {},
          "-webkit-text-fill-color": "transparent !important",
        },
        ".hover\\:main-title:hover": {
          "@apply bg-custom-gradient bg-clip-text": {},
          "-webkit-text-fill-color": "transparent !important",
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
