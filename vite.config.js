import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'shared': '/src/shared',
      'components': '/src/shared/components',
      'utils': '/src/shared/utils',
      'hooks': '/src/shared/hooks',
      'helpers': '/src/shared/helpers',
      'client': '/src/client',
      'admin': '/src/admin',
      'assets': '/src/assets',
      'routes': '/src/routes',
      'stores': '/src/stores',
      'apis': '/src/apis'
    }
  }
})
