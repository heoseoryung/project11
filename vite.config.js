import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 하나로 통합된 Vite 설정
export default defineConfig({
  // 1. 리액트 플러그인 적용
  plugins: [react()],

  // 2. 경로 별칭 설정 (기존 충돌 방지용 유지)
  resolve: {
    alias: {
      'react/jsx-runtime.js': 'react/jsx-runtime',
    },
  },

  // 3. 개발 서버 설정
  server: {
    port: 3000,       // 실행 포트 3000번 고정
    strictPort: true, // 3000번 사용 중이면 다른 포트로 안 넘어가고 에러 출력
    
    // 필요하다면 여기에 프록시 설정을 추가해서 백엔드와 연결할 수 있어!
    // proxy: {
    //   '/api': 'http://localhost:8080'
    // }
  },
})