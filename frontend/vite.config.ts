import { defineConfig, loadEnv } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';
import { resolve } from 'path';
// import compress from 'vite-plugin-compression';
import react from '@vitejs/plugin-react';

export default defineConfig(configEnv => {
  const isDevelopment = configEnv.mode === 'development';
  const env = loadEnv(configEnv.mode, process.cwd());

  return {
    plugins: [
      react(),
      createHtmlPlugin({
        inject: { data: { kakaoKey: env.VITE_APP_API_KAKAO_KEY } },
      }),
    ],
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
      watch: {
        include: 'src/**',
        exclude: 'node_modules/**',
      },
      cssCodeSplit: true,
    },
    assetsInclude: ['*.webp', '*.gif'],
    css: {
      preprocessorOptions: { css: { charset: false } },
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
