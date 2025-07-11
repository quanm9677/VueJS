/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      // Bạn có thể tùy chỉnh thêm nếu cần ví dụ như màu sắc, font, spacing...
      colors: {
        primary: '#3b82f6', // blue-500
        danger: '#ef4444',  // red-500
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
}
