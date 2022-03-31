import { defineConfig, loadEnv } from 'vite';
import viteCompression from 'vite-plugin-compression';
import VitePluginHtmlEnv from 'vite-plugin-html-env';
import { resolve } from 'path';
import compress from 'vite-plugin-compression';
import react from '@vitejs/plugin-react';

export default defineConfig(configEnv => {
  const isDevelopment = configEnv.mode === 'development';

  process.env = { ...process.env, ...loadEnv(configEnv.mode, process.cwd()) };

  console.log(process.env);

  return {
    plugins: [compress(), react(), VitePluginHtmlEnv({ prefix: '<{', suffix: '}>' })],
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
      minify: 'esbuild',
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
          target: 'http://localhost:8080',
          changeOrigin: true,
          rewrite: path => path.replace(/^\/api/, ''),
        },
      },
      open: '/',
    },
  };
});
