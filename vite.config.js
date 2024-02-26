import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'assets': '/src/assets',
      'components': '/src/components',
      'layouts': '/src/layouts',
      'pages': '/src/pages',
      'routes': '/src/routes',
      'stores': '/src/stores',
      'utils': '/src/utils',
      'views': '/src/views',
      'apis': '/src/apis'
    }
  }
})
