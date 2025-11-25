import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Otimizações de build
    rollupOptions: {
      output: {
        manualChunks: {
          // Separar Material-UI em chunk próprio
          'mui': ['@mui/material', '@mui/icons-material'],
          // Separar React em chunk próprio
          'react-vendor': ['react', 'react-dom'],
        },
      },
    },
    // Comprimir assets
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.logs em produção
        drop_debugger: true,
      },
    },
    // Otimizar chunks
    chunkSizeWarningLimit: 1000,
  },
  // Otimizar imagens e assets
  assetsInclude: ['**/*.jpg', '**/*.png', '**/*.pdf'],
})
