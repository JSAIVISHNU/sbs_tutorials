import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

function apiDevPlugin() {
  return {
    name: 'api-dev-middleware',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const url = req.url ? req.url.split('?')[0] : ''
        if (url === '/api/send-enquiry' || url === '/api/chat') {
          const apiFile = url === '/api/chat' ? './api/chat.js' : './api/send-enquiry.js'
          try {
            const buffers = []
            for await (const chunk of req) buffers.push(chunk)
            const rawBody = Buffer.concat(buffers).toString()
            let body = {}
            if (rawBody) {
              try {
                body = JSON.parse(rawBody)
              } catch {
                body = rawBody
              }
            }
            req.body = body

            res.status = (code) => {
              res.statusCode = code
              return res
            }
            res.json = (data) => {
              res.setHeader('Content-Type', 'application/json')
              res.end(JSON.stringify(data))
              return res
            }

            const { default: handler } = await import(apiFile)
            await handler(req, res)
          } catch (err) {
            res.statusCode = 500
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ success: false, message: err.message }))
          }
          return
        }
        next()
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Load all .env variables (including non-VITE_ vars) into process.env for local API testing
  const env = loadEnv(mode, process.cwd(), '')
  Object.assign(process.env, env)

  return {
    plugins: [
      react(),
      tailwindcss(),
      apiDevPlugin(),
      VitePWA({
        registerType: 'autoUpdate',
        includeAssets: ['favicon.svg', 'favicon.png', 'images/logo.png'],
        manifest: {
          name: 'Brilliant Hub',
          short_name: 'Brilliant Hub',
          description: 'Brilliant Hub - tuition, music, drawing and abacus classes in Uttarahalli, Bengaluru.',
          theme_color: '#03345d',
          background_color: '#f8f9ff',
          display: 'standalone',
          start_url: '/',
          scope: '/',
          icons: [
            { src: '/favicon.png', sizes: '192x192', type: 'image/png' },
            { src: '/favicon.png', sizes: '512x512', type: 'image/png' },
          ],
        },
        workbox: {
          globPatterns: ['**/*.{js,css,html,svg,png,jpg,jpeg,webp}'],
          navigateFallback: '/offline.html',
          runtimeCaching: [],
        },
      }),
    ],
    build: {
      rollupOptions: {
        input: {
          main: 'index.html',
          courses: 'courses.html',
          about: 'about.html',
          contact: 'contact.html',
          admissions: 'admissions.html',
        },
      },
    },
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: './src/tests/setup.js',
      css: true,
      exclude: ['**/node_modules/**', '**/dist/**', '**/e2e/**', '**/playwright-report/**'],
    },
    esbuild: {
      jsx: 'automatic',
      jsxImportSource: 'react',
    },
  }
})
