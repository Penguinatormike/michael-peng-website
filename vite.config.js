import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Amplify Hosting was set up for CRA, which outputs to build/
  build: { outDir: 'build' },
});
