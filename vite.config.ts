import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/portfolio_new/',  // ✅ required for GitHub Pages
  plugins: [react()],
});

