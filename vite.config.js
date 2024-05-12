import { defineConfig } from 'vite'

export default defineConfig({
  build: {
      rollupOptions: {
          input: {
              app: './pages/index.html',
          },
      },
  },
server: {
    open: '/pages/index.html',
},
})