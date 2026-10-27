<script setup>
import { computed } from 'vue'
import { catalogProducts } from '~/src/catalogProducts'

const route = useRoute()
const config = useRuntimeConfig()
const productIndex = Number(route.params.id) - 1
const product = catalogProducts[productIndex]

if (!product) {
  throw createError({ statusCode: 404, statusMessage: 'Produk tidak ditemukan' })
}

const productNumber = String(productIndex + 1).padStart(2, '0')
const siteUrl = config.public.siteUrl.replace(/\/$/, '')
const productUrl = `${siteUrl}/produk/${productIndex + 1}`
const productImageUrl = `${siteUrl}${product.image}`
const whatsappUrl = `https://wa.me/6281230173112?text=${encodeURIComponent(`Saya mau tanya tentang produk ini ${productUrl}`)}`

useSeoMeta({
  title: `Produk ${productNumber} | Sumber Rejeki Gresik`,
  description: `Tanyakan Produk ${productNumber} dari Sumber Rejeki Gresik melalui WhatsApp.`,
  ogTitle: `Produk ${productNumber} | Sumber Rejeki Gresik`,
  ogDescription: 'Peralatan rumah tangga dari Sumber Rejeki di Pasar Kota Gresik.',
  ogType: 'product',
  ogUrl: productUrl,
  ogImage: productImageUrl,
  ogImageAlt: `Produk ${productNumber} Sumber Rejeki Gresik`,
  twitterCard: 'summary_large_image',
  twitterTitle: `Produk ${productNumber} | Sumber Rejeki Gresik`,
  twitterDescription: 'Peralatan rumah tangga dari Sumber Rejeki di Pasar Kota Gresik.',
  twitterImage: productImageUrl,
})

useHead({
  link: [{ rel: 'canonical', href: productUrl }],
})

const productLabel = computed(() => `Produk ${productNumber} Sumber Rejeki`)
</script>

<template>
  <main class="product-preview-page">
    <NuxtLink class="product-preview-brand" to="/" aria-label="Kembali ke beranda Sumber Rejeki">
      <img src="/assets/brand/srnormal.png" alt="Logo Sumber Rejeki" />
      <span><strong>Sumber</strong>Rejeki<small>Peralatan Rumah Tangga</small></span>
    </NuxtLink>

    <section class="product-preview-card">
      <div class="product-preview-image"><img :src="product.image" :alt="productLabel" /></div>
      <div class="product-preview-content">
        <p class="section-number">PRODUK {{ productNumber }}</p>
        <h1>{{ productLabel }}</h1>
        <p>Untuk stok, harga, atau pembelian grosir, silakan hubungi Pak Eko melalui WhatsApp.</p>
        <a class="button button-dark" :href="whatsappUrl" target="_blank" rel="noreferrer">Tanya via WhatsApp <span>→</span></a>
        <NuxtLink class="product-preview-back" to="/#produk">Lihat koleksi lainnya <span>→</span></NuxtLink>
      </div>
    </section>
  </main>
</template>
