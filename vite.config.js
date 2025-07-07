import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@client': path.resolve(__dirname, 'src/client'),
      '@engine': path.resolve(__dirname, 'src/engine'),
    },
  },
  root: '.',
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
  server: {
    host: '0.0.0.0',   
    port: 3000,        
  },
});