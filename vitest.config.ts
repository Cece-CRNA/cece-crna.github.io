import path from 'node:path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname)
    }
  },
  esbuild: {
    jsx: 'automatic',
    jsxImportSource: 'react'
  },
  test: {
    include: ['tests/unit/**/*.test.ts?(x)'],
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./vitest.setup.ts']
  }
});
