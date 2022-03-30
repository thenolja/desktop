import { defineConfig } from 'vite';
import viteCompression from 'vite-plugin-compression';
import VitePluginHtmlEnv from 'vite-plugin-html-env';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';

export default defineConfig(configEnv => {
  const isDevelopment = configEnv.mode === 'development';

  return {
    plugins: [react(), VitePluginHtmlEnv()],
    resolve: {
      alias: {
        src: resolve(__dirname, 'src'),
        app: resolve(__dirname, 'src', 'app'),
        components: resolve(__dirname, 'src', 'components'),
        assets: resolve(__dirname, 'src', 'assets'),
      },
    },
    build: {
      outDir: resolve(__dirname, 'dist'),
      chunkSizeWarningLimit: 1500,
      sourcemap: false,
    },
    assetsInclude: ['*.webp', '*.gif'],
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
