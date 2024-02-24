import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'assets': '/src/assets',
      'components': '/src/components',
      'config': '/src/config',
      'containers': '/src/containers',
      'hooks': '/src/hooks',
      'layouts': '/src/layouts',
      'locales': '/src/locales',
      'models': '/src/models',
      'pages': '/src/pages',
      'routes': '/src/routes',
      'services': '/src/services',
      'stores': '/src/stores',
      'themes': '/src/themes',
      'typings': '/src/typings',
      'utils': '/src/utils',
      'views': '/src/views',
      'apis': '/src/apis'
    }
  }
})
