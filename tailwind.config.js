@type{import('tailwindcss').Config} 
module.exports = {
    content: [
      "./index.html", // Replace with the actual path to your HTML file
      "./src/**/*.{vue,js,ts,jsx,tsx}", // If you have any JavaScript/TypeScript components
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }