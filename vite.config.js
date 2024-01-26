import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'styles': '/src/styles',
      'components': '/src/components',
      'pages': '/src/pages',
      'utils': '/src/utils',
      'hooks': '/src/hooks',
      'assets': '/src/assets',
      'config': '/src/config',
      'services': '/src/services',
      'constants': '/src/constants',
      'types': '/src/types',
      'store': '/src/store',
      'api': '/src/api',
      'routes': '/src/routes'
    }
  }
})
