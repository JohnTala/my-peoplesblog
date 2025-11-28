import { defineConfig } from 'vite';

// Detect if we are in production (build) or dev
const isGitHubPages = process.env.DEPLOY === 'true';

export default defineConfig({
  root: 'src',
  base: isGitHubPages ? '/my-peoplesblog/' : './', // dynamic base
  server: {
    port: 3000, // dev server port
  },
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
});
