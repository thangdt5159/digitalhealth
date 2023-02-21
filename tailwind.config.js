/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainBg: "#ef476d",
        secondaryColr: "#9d94f6",
        text: "#f82252",
      },
      backgroundImage: {
        btmBg: "url('/images/unsplash-image.jpg')",
      },
    },
  },
  plugins: [],
};
