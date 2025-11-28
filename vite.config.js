import { defineConfig } from 'vite';

// Detect if we are deploying to GitHub Pages
const isGitHubPages = process.env.DEPLOY === 'true';

export default defineConfig({
  root: 'src',
  base: isGitHubPages ? '/my-peoplesblog/' : './',  // relative locally, absolute for GH Pages
  server: {
    port: 3000,  // dev server port
  },
  preview: {
    port: 3000,  // preview server port
  },
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
});
