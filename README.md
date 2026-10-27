# Sumber Rejeki Landing

Landing page Nuxt 3 untuk Sumber Rejeki. Halaman tetap statis, tetapi kini dirender dan dibangun melalui Nuxt.

## Menjalankan lokal

```bash
npm install
npm run dev
```

## Deploy ke Cloudflare Pages

```bash
npm run generate
```

Konfigurasi Cloudflare Pages:

- Build command: `npm run generate`
- Build output directory: `.output/public`
- Node.js: 20 atau lebih baru

Halaman ini murni statis; tidak membutuhkan environment variable atau server-side runtime.
