/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        normalBox: "0 0 2px 0px #dddddd00",
        hoveredBox: " 0 0 2px 0px #dddddda1",
      },
      backgroundImage: {
        circle:
          "radial-gradient(900px circle at 50% 50%,rgba(29, 79, 216, 0.222),transparent 50%)",
      },
    },
  },
  plugins: [],
};
