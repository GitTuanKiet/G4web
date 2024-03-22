import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'assets': '/src/assets',
      'components': '/src/shared/components',
      'layouts': '/src/client/layouts',
      'pages': '/src/client/pages',
      'routes': '/src/routes',
      'stores': '/src/stores',
      'utils': '/src/shared/utils',
      'views': '/src/client/views',
      'apis': '/src/apis',
      'img' : '/src/img',
    }
  }
})
