// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src',          // la app vive en /src
  build: { outDir: '../dist' } // salida a /dist en la raíz
});
