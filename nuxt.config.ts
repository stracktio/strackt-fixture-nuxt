export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  // Leftover from a Vercel deployment: builds for Vercel, so no Node server
  // (.output/server/index.mjs) is produced for strackt to start.
  nitro: { preset: 'vercel' },
});
