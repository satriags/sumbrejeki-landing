const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'Store',
  name: 'Sumber Rejeki Gresik Store',
  description: 'Toko peralatan rumah tangga untuk kebutuhan rumah dan usaha di Pasar Kota Gresik.',
  image: '/assets/brand/srnormal.png',
  logo: '/assets/brand/srnormal.png',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Pasar Kota Gresik, Jl. Samanhudi No. Blok C, Kebungson, Kemuteran',
    addressLocality: 'Gresik',
    addressRegion: 'Jawa Timur',
    addressCountry: 'ID',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -7.152860178684999,
    longitude: 112.65193873888798,
  },
  hasMap: 'https://share.google/NoC4kER8kyCRVevY9',
}

export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: false },
  css: ['~/src/style.css'],
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://sumbrejeki.com',
    },
  },
  nitro: {
    prerender: {
      routes: catalogProducts.map((_, index) => `/produk/${index + 1}`),
    },
  },
  app: {
    head: {
      htmlAttrs: { lang: 'id' },
      title: 'Sumber Rejeki Gresik | Peralatan Rumah Tangga & Grosir',
      meta: [
        { name: 'description', content: 'Sumber Rejeki Gresik menyediakan peralatan rumah tangga untuk belanja eceran dan grosir di Pasar Kota Gresik. Lihat produk dan hubungi kami via WhatsApp.' },
        { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
        { name: 'author', content: 'Sumber Rejeki Gresik' },
        { name: 'geo.region', content: 'ID-JI' },
        { name: 'geo.placename', content: 'Gresik, Jawa Timur' },
        { name: 'geo.position', content: '-7.152860178684999;112.65193873888798' },
        { name: 'ICBM', content: '-7.152860178684999, 112.65193873888798' },
        { property: 'og:locale', content: 'id_ID' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Sumber Rejeki Gresik' },
        { property: 'og:title', content: 'Sumber Rejeki Gresik | Peralatan Rumah Tangga & Grosir' },
        { property: 'og:description', content: 'Belanja peralatan rumah tangga eceran dan grosir di Pasar Kota Gresik. Lihat koleksi produk atau hubungi kami via WhatsApp.' },
        { property: 'og:image', content: '/assets/brand/srnormal.png' },
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:title', content: 'Sumber Rejeki Gresik | Peralatan Rumah Tangga & Grosir' },
        { name: 'twitter:description', content: 'Toko peralatan rumah tangga di Pasar Kota Gresik untuk belanja eceran dan grosir.' },
        { name: 'twitter:image', content: '/assets/brand/srnormal.png' },
        { name: 'theme-color', content: '#1f3064' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/assets/brand/srnormal.png' },
        { rel: 'apple-touch-icon', href: '/assets/brand/srnormal.png' },
      ],
      script: [
        { type: 'application/ld+json', children: JSON.stringify(localBusinessSchema) },
      ],
    },
  },
})
import { catalogProducts } from './src/catalogProducts'

