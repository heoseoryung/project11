/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF4D00", // 테일윈드 기본 클래스용
      },
    },
  },
  plugins: [daisyui],
  // 🚨 DaisyUI 설정에서 보라색을 오렌지로 교체
  daisyui: {
    themes: [
      {
        light: {
          "primary": "#FF4D00",
          "primary-focus": "#E64500",
          "primary-content": "#ffffff",
          "base-100": "#ffffff",
          "base-200": "#f2f2f2",
        },
      },
    ],
  },
}