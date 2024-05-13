import { defineConfig } from 'vite'
import tailwindcss from 'tailwindcss'

export default defineConfig({
  build: {
      rollupOptions: {
          input: {
              main: './index.html',
              'about-us': './pages/about-us.html',
              'contact-us': './pages/contact-us.html',
              blog: './pages/blog.html',
              portfolio: './pages/portfolio.html',
              todo: './pages/todo.html',
              nav: './components/nav.html',
              footer: './components/footer.html',
          },
      },
  },
server: {
    open: '/pages/index.html',
},
    plugins: [],
    resolve: {
        /*something*/
    },
    css: {
        postcss: {
            plugins: [tailwindcss],
        },
    },
})