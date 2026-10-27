<script setup>
import { onMounted, ref } from 'vue'
import { catalogProducts } from './catalogProducts'

const menuOpen = ref(false)
const showGallery = ref(false)
const siteOrigin = ref('https://sumbrejeki.com')

const whatsappUrl = 'https://wa.me/6281230173112'
const mapsUrl = 'https://www.google.com/maps/place/Toko+Sumber+Rejeki/@-7.152858,112.6499101,17z/data=!3m1!4b1!4m5!3m4!1s0x2dd801efe04f5677:0xea6ab31fb3b35217!8m2!3d-7.1528633!4d112.6520988'
const mapEmbedUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.42296816989037!2d112.65193873888798!3d-7.152860178684999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd801efe04f5677%3A0xea6ab31fb3b35217!2sSumber%20Rejeki%20Gresik%20Store!5e0!3m2!1sid!2sid!4v1793100563613!5m2!1sid!2sid'

onMounted(() => {
  siteOrigin.value = window.location.origin
})

function navigateTo(id) {
  menuOpen.value = false
  document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
}

function productWhatsappUrl(product, index) {
  const productUrl = new URL(`/produk/${index + 1}`, `${siteOrigin.value}/`).href
  const message = `Saya mau tanya tentang produk ini ${productUrl}`

  return `${whatsappUrl}?text=${encodeURIComponent(message)}`
}
</script>

<template>
  <header class="site-header">
    <a class="brand" href="#beranda" aria-label="Sumber Rejeki beranda" @click.prevent="navigateTo('#beranda')">
      <img src="/assets/brand/srnormal.png" alt="Logo Sumber Rejeki" />
      <span><strong>Sumber</strong>Rejeki<small>Peralatan Rumah Tangga</small></span>
    </a>

    <button class="menu-toggle" type="button" :aria-expanded="menuOpen" aria-label="Buka menu" @click="menuOpen = !menuOpen">
      <span></span><span></span><span></span>
    </button>

    <nav :class="['site-nav', { open: menuOpen }]" aria-label="Navigasi utama">
      <a href="#tentang" @click.prevent="navigateTo('#tentang')">Tentang</a>
      <a href="#produk" @click.prevent="navigateTo('#produk')">Produk</a>
      <a href="#lokasi" @click.prevent="navigateTo('#lokasi')">Lokasi</a>
      <a class="nav-cta" :href="whatsappUrl" target="_blank" rel="noreferrer">Hubungi Kami <span>↗</span></a>
    </nav>
  </header>

  <main>
    <section id="beranda" class="hero">
      <div class="hero-grid"></div>
      <div class="hero-copy">
        <p class="eyebrow"><span></span> Pasar Kota Gresik</p>
        <h1>Perlengkapan rumah, <em>dekat</em> dari rumah.</h1>
        <p class="hero-text">Sumber Rejeki menyediakan kebutuhan peralatan rumah tangga untuk belanja sehari-hari maupun kebutuhan usaha Anda.</p>
        <div class="hero-actions">
          <a class="button button-light" :href="whatsappUrl" target="_blank" rel="noreferrer">Pesan via WhatsApp <span>→</span></a>
          <a class="text-link" :href="mapsUrl" target="_blank" rel="noreferrer">Lihat lokasi toko <span>↗</span></a>
        </div>
        <div class="hero-meta">
          <div><b>Gresik</b><span>Jawa Timur</span></div>
          <div><b>Grosir & eceran</b><span>Untuk rumah & usaha</span></div>
        </div>
      </div>

      <figure class="hero-visual">
        <div class="sun"></div>
        <div class="arch arch-one"></div><div class="arch arch-two"></div>
        <div class="product-orb"><img src="/assets/market/banner2.png" alt="Suasana belanja peralatan rumah tangga di Sumber Rejeki Gresik" /></div>
        <div class="market-photo market-photo-head"><img src="/assets/market/head.jpg" alt="Suasana Pasar Kota Gresik di dekat Sumber Rejeki" /></div>
        <div class="market-photo market-photo-detail"><img src="/assets/market/foot.jpg" alt="Pilihan peralatan dapur di Sumber Rejeki" /></div>
        <div class="tag tag-top">Suasana Pasar Kota Gresik</div>
        <div class="tag tag-bottom">Sejak dari pasar, untuk rumah Anda</div>
      </figure>
    </section>

    <section id="tentang" class="intro section-shell">
      <p class="section-number">01 / TENTANG KAMI</p>
      <div>
        <h2>Belanja terasa lebih mudah ketika <em>kebutuhan Anda</em> tersedia dekat.</h2>
      </div>
      <div class="intro-copy">
        <p>Kami hadir di Pasar Kota Gresik untuk membantu menemukan peralatan rumah tangga yang Anda perlukan. Datang langsung, atau hubungi kami terlebih dahulu untuk kebutuhan belanja Anda.</p>
        <a :href="mapsUrl" target="_blank" rel="noreferrer" class="arrow-link">Kunjungi toko kami <span>→</span></a>
      </div>
    </section>

    <section id="produk" class="catalog section-shell">
      <div class="catalog-heading">
        <div><p class="section-number">02 / KOLEKSI PRODUK</p><h2>Pilih kebutuhan<br /><em>rumah Anda.</em></h2></div>
        <p>Jelajahi koleksi visual kami. Untuk stok, harga, atau pembelian grosir, langsung chat Pak Eko.</p>
      </div>
      <div class="catalog-grid">
        <a v-for="(product, index) in catalogProducts.slice(0, 8)" :key="product.image" class="catalog-card" :href="productWhatsappUrl(product, index)" target="_blank" rel="noreferrer" :aria-label="`Tanyakan produk ${index + 1} ke Pak Eko melalui WhatsApp`">
          <img :src="product.image" :alt="`Produk Sumber Rejeki ${index + 1}`" loading="lazy" decoding="async" />
          <span class="catalog-number">{{ String(index + 1).padStart(2, '0') }}</span>
          <span class="catalog-action">Tanya produk <b>↗</b></span>
        </a>
      </div>
      <div class="catalog-expand"><button type="button" aria-haspopup="dialog" :aria-expanded="showGallery" @click="showGallery = true">Lihat semua {{ catalogProducts.length }} produk <span>↓</span></button></div>
      <div class="catalog-cta"><p>Sudah menemukan yang dicari?</p><a class="button button-dark" :href="whatsappUrl" target="_blank" rel="noreferrer">WhatsApp Pak Eko <span>→</span></a></div>
    </section>

    <section class="delivery">
      <div class="delivery-panel"><p class="section-number">03 / PILIH CARANYA</p><h2>Ambil sendiri<br />atau <em>kami antar.</em></h2><p>Atur pemesanan yang paling sesuai dengan kebutuhan Anda.</p></div>
      <div class="delivery-options">
        <article><div class="delivery-icon">⌂</div><p class="eyebrow">PRAKTIS</p><h3>Dikirim ke tempatmu</h3><p>Untuk pesanan di wilayah Kota Gresik, hubungi kami untuk menanyakan pilihan pengiriman. Syarat dan ketentuan berlaku; kami tidak menerima antar barang bijian, kecuali menggunakan ekspedisi seperti GoSend atau sejenisnya.</p></article>
        <article><div class="delivery-icon">⌁</div><p class="eyebrow">FLEKSIBEL</p><h3>Ambil sendiri</h3><p>Pesan lebih dulu dan ambil kebutuhan Anda langsung di toko kami di Pasar Kota Gresik.</p></article>
      </div>
    </section>

    <section id="lokasi" class="location section-shell">
      <div class="location-copy">
        <p class="section-number">04 / LOKASI TOKO</p>
        <h2>Kunjungi kami di<br /><em>Pasar Kota Gresik.</em></h2>
        <p>Temukan Sumber Rejeki di Jl. Samanhudi No. Blok C, Kebungson, Kemuteran, Gresik. Datang langsung atau buka petunjuk arah di Google Maps.</p>
        <a class="button button-dark" :href="mapsUrl" target="_blank" rel="noreferrer">Buka Google Maps <span>↗</span></a>
      </div>
      <div class="location-map">
        <iframe :src="mapEmbedUrl" title="Peta lokasi Sumber Rejeki Gresik" width="600" height="450" style="border:0" allowfullscreen loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>
      </div>
    </section>

    <section class="social-showcase section-shell" aria-labelledby="social-title">
      <div class="social-copy">
        <p class="section-number">05 / IKUTI KAMI</p>
        <h2 id="social-title">Lihat keseruan<br /><em>di sosial media.</em></h2>
        <p>Ikuti @sumbrejeki untuk melihat koleksi, suasana toko, dan konten terbaru langsung dari Pasar Kota Gresik.</p>
      </div>
      <div class="social-profile-grid">
        <a class="social-profile social-profile-tiktok" href="https://www.tiktok.com/@sumbrejeki" target="_blank" rel="noreferrer" aria-label="Buka profil TikTok Sumber Rejeki">
          <img src="/assets/market/banner2.png" alt="Suasana toko Sumber Rejeki untuk TikTok" loading="lazy" decoding="async" />
          <span class="social-platform">TikTok</span><strong>@sumbrejeki</strong><span class="social-open">Lihat konten ↗</span>
        </a>
        <a class="social-profile social-profile-instagram" href="https://instagram.com/sumbrejeki" target="_blank" rel="noreferrer" aria-label="Buka profil Instagram Sumber Rejeki">
          <img src="/assets/market/head.jpg" alt="Suasana Pasar Kota Gresik untuk Instagram" loading="lazy" decoding="async" />
          <span class="social-platform">Instagram</span><strong>@sumbrejeki</strong><span class="social-open">Lihat foto ↗</span>
        </a>
      </div>
    </section>

    <section class="contact-banner">
      <div class="contact-mark">SR</div>
      <div><p class="eyebrow"><span></span> BUTUH BANTUAN MEMILIH?</p><h2>Yuk, ngobrol<br /><em>dengan kami.</em></h2></div>
      <a class="button button-light" :href="whatsappUrl" target="_blank" rel="noreferrer">WhatsApp Pak Eko <span>→</span></a>
    </section>
  </main>

  <footer><div class="brand footer-brand"><img src="/assets/brand/srnormal.png" alt="Logo Sumber Rejeki" /><span><strong>Sumber</strong>Rejeki<small>Peralatan Rumah Tangga</small></span></div><p>Pasar Kota Gresik, Jl. Samanhudi No. Blok C,<br />Kebungson, Kemuteran, Gresik, Jawa Timur.</p><div class="footer-links"><a :href="mapsUrl" target="_blank" rel="noreferrer">Google Maps ↗</a><a href="https://instagram.com/sumbrejeki" target="_blank" rel="noreferrer">Instagram ↗</a><a href="https://www.tiktok.com/@sumbrejeki" target="_blank" rel="noreferrer">TikTok ↗</a></div><small>© {{ new Date().getFullYear() }} Sumber Rejeki</small></footer>

  <Teleport to="body">
    <div v-if="showGallery" class="gallery-modal" @click.self="showGallery = false" @keydown.esc.window="showGallery = false">
      <section class="gallery-dialog" role="dialog" aria-modal="true" aria-labelledby="gallery-title">
        <header class="gallery-dialog-head">
          <div><p class="eyebrow">KOLEKSI LENGKAP</p><h2 id="gallery-title">{{ catalogProducts.length }} produk Sumber Rejeki</h2></div>
          <button class="gallery-close" type="button" aria-label="Tutup galeri produk" @click="showGallery = false">×</button>
        </header>
        <div class="gallery-modal-grid">
          <a v-for="(product, index) in catalogProducts" :key="product.image" class="gallery-modal-card" :href="productWhatsappUrl(product, index)" target="_blank" rel="noreferrer" :aria-label="`Tanyakan produk ${index + 1} kepada Pak Eko via WhatsApp`">
            <img :src="product.image" :alt="`Produk Sumber Rejeki ${index + 1}`" loading="lazy" decoding="async" />
            <span>{{ String(index + 1).padStart(2, '0') }}</span>
          </a>
        </div>
      </section>
    </div>
  </Teleport>
</template>
