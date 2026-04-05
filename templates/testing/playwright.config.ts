import { defineConfig } from '@playwright/test';
export default defineConfig({
  testDir: './e2e',
  timeout: 30000,
  retries: 2,
  use: { baseURL: 'http://localhost:3000' },
});