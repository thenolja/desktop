import { defineConfig } from 'vite';
import copy from 'vite-plugin-copy';
import viteCompression from 'vite-plugin-compression';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';

export default defineConfig(configEnv => {
  const isDevelopment = configEnv.mode === 'development';

  return {
    plugins: [react()],
    resolve: {
      alias: {
        src: resolve(__dirname, 'src'),
        app: resolve(__dirname, 'src', 'app'),
        components: resolve(__dirname, 'src', 'components'),
      },
    },
    build: {
      outDir: resolve(__dirname, 'dist'),
      sourcemap: true,
      chunkSizeWarningLimit: 1500,
    },
    css: {
      modules: {
        generateScopedName: isDevelopment ? '[name]__[local]__[hash:base64:5]' : '[hash:base64:5]',
      },
    },
    server: {
      proxy: {
        '/api': {
          target: 'http://localhost:4000',
          changeOrigin: true,
          rewrite: path => path.replace(/^\/api/, ''),
        },
      },
      open: '/',
    },
  };
});
