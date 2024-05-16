/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      colors: {
        "paynes-gray": "#586F7C",
        "light-blue": "#B8DBD9",
        "ghost-white": "#F4F4F9",
      },
    },
  },
  plugins: [],
};
