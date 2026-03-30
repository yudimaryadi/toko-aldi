'use client';

import { TypeAnimation } from 'react-type-animation';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[#1a1a1a] font-sans antialiased">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/asset/toko-ilustrator.png" alt="Logo Toko Aldi" className="w-12 h-12 rounded-lg object-cover" />
            <div>
              <h1 className="text-lg font-semibold tracking-tight">Toko Aldi</h1>
              <p className="text-xs text-gray-500 font-light">Kelontong Keluarga</p>
            </div>
          </div>
          
          <nav className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#about" className="text-gray-600 hover:text-[#10b981] transition">Tentang</a>
            <a href="#products" className="text-gray-600 hover:text-[#10b981] transition">Produk</a>
            <a href="#gallery" className="text-gray-600 hover:text-[#10b981] transition">Galeri</a>
            <a href="#contact" className="text-gray-600 hover:text-[#10b981] transition">Kontak</a>
          </nav>
          
          <a href="https://wa.me/6282145114747" className="bg-[#10b981] text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-[#059669] transition shadow-sm">
            Hubungi Kami
          </a>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Hero Section */}
        <section className="py-24 md:py-32 text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 leading-tight">
            <TypeAnimation
              sequence={[
                'Belanja Lengkap',
                2000,
                'Harga Sahabat',
                2000,
                'Dekat di Hati',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-[#10b981]"
            />
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Toko Aldi hadir dengan dedikasi penuh untuk kebutuhan harian Anda. Stok lengkap, harga terjangkau, pelayanan ramah.
          </p>
          <a href="https://wa.me/6282145114747" className="inline-block bg-[#10b981] text-white px-8 py-3.5 rounded-lg text-base font-medium hover:bg-[#059669] transition shadow-md hover:shadow-lg">
            Pesan Sekarang
          </a>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Tentang Kami</h3>
              <p className="text-gray-600 leading-relaxed font-light mb-6">
                Dikelola keluarga dengan semangat membantu warga sekitar. Kami memastikan ketersediaan stok lengkap, kualitas terbaik, dan pelayanan yang hangat seperti di rumah sendiri.
              </p>
              <p className="text-gray-600 leading-relaxed font-light">
                Dengan pengalaman lebih dari satu dekade, kami memahami kebutuhan komunitas lokal dan berkomitmen untuk memberikan yang terbaik.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#10b981]/10 to-[#10b981]/5 p-8 rounded-2xl flex flex-col items-center justify-center">
              <img src="/asset/toko-ilustrator.png" alt="Toko Aldi" className="w-64 h-64 rounded-lg object-cover mb-6" />
              <p className="text-gray-700 font-light text-center">Melayani dengan sepenuh hati untuk kesejahteraan keluarga Anda</p>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="py-20 md:py-24">
          <h3 className="text-3xl md:text-4xl font-bold mb-4 text-center text-gray-900">Kategori Produk</h3>
          <p className="text-center text-gray-600 mb-12 font-light">Berbagai kebutuhan sehari-hari dalam satu tempat</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white border border-gray-100 p-8 rounded-xl hover:border-[#10b981]/30 hover:shadow-lg transition text-center">
              <div className="text-5xl mb-4">🥖</div>
              <h4 className="font-semibold text-gray-900">Sembako</h4>
              <p className="text-sm text-gray-500 mt-2 font-light">Kebutuhan pokok</p>
            </div>
            <div className="bg-white border border-gray-100 p-8 rounded-xl hover:border-[#10b981]/30 hover:shadow-lg transition text-center">
              <div className="text-5xl mb-4">🧴</div>
              <h4 className="font-semibold text-gray-900">Kebutuhan Rumah</h4>
              <p className="text-sm text-gray-500 mt-2 font-light">Perlengkapan</p>
            </div>
            <div className="bg-white border border-gray-100 p-8 rounded-xl hover:border-[#10b981]/30 hover:shadow-lg transition text-center">
              <div className="text-5xl mb-4">🍪</div>
              <h4 className="font-semibold text-gray-900">Makanan Ringan</h4>
              <p className="text-sm text-gray-500 mt-2 font-light">Snack favorit</p>
            </div>
            <div className="bg-white border border-gray-100 p-8 rounded-xl hover:border-[#10b981]/30 hover:shadow-lg transition text-center">
              <div className="text-5xl mb-4">🥤</div>
              <h4 className="font-semibold text-gray-900">Minuman</h4>
              <p className="text-sm text-gray-500 mt-2 font-light">Pilihan segar</p>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="py-20 md:py-24">
          <h3 className="text-3xl md:text-4xl font-bold mb-4 text-center text-gray-900">Galeri Toko</h3>
          <p className="text-center text-gray-600 mb-12 font-light">Suasana nyaman dan produk berkualitas</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="overflow-hidden rounded-xl">
              <img src="/asset/depan-toko.jpeg" alt="Depan Toko" className="w-full h-48 object-cover hover:scale-105 transition duration-300" />
            </div>
            <div className="overflow-hidden rounded-xl">
              <img src="https://images.unsplash.com/photo-1567007046005-b0802fefeafa" alt="Interior" className="w-full h-48 object-cover hover:scale-105 transition duration-300" />
            </div>
            <div className="overflow-hidden rounded-xl">
              <img src="https://images.unsplash.com/photo-1567007045401-24c4f4a31920" alt="Produk" className="w-full h-48 object-cover hover:scale-105 transition duration-300" />
            </div>
            <div className="overflow-hidden rounded-xl">
              <img src="https://images.unsplash.com/photo-1699581913577-cc877cdae36b" alt="Pelayanan" className="w-full h-48 object-cover hover:scale-105 transition duration-300" />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 md:py-24">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">Lokasi & Jam</h3>
              <div className="space-y-6">
                <div>
                  <p className="text-sm font-semibold text-gray-500 mb-2 uppercase tracking-wider">Alamat</p>
                  <p className="text-gray-700 font-light leading-relaxed">
                    Jl. Raya Taliwang, RT 01 RW 05, Lingkungan Kota Baru, Kelurahan Dalam, Kecamatan Taliwang, Sumbawa Barat
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-500 mb-2 uppercase tracking-wider">Jam Operasional</p>
                  <p className="text-gray-700 font-light">Buka: 08.00 - 23.00 setiap hari</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-500 mb-2 uppercase tracking-wider">WhatsApp</p>
                  <a href="https://wa.me/6282145114747" className="text-[#10b981] hover:text-[#059669] font-medium transition">
                    +62 821-4511-4747
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#10b981]/5 to-[#10b981]/10 p-8 md:p-12 rounded-2xl border border-gray-100">
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">Nama</label>
                  <input type="text" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#10b981] focus:ring-1 focus:ring-[#10b981]/50 transition" placeholder="Nama Anda" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">Pesan</label>
                  <textarea className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#10b981] focus:ring-1 focus:ring-[#10b981]/50 transition" rows={4} placeholder="Tulis pesan Anda..."></textarea>
                </div>
                <button className="w-full bg-[#10b981] text-white py-3 rounded-lg font-medium hover:bg-[#059669] transition shadow-md hover:shadow-lg">
                  Kirim Pesan
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-100 mt-20">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-12 text-center text-gray-600 text-sm font-light">
          <p>© {new Date().getFullYear()} Toko Aldi. Semua hak dilindungi.</p>
        </div>
      </footer>
    </div>
  );
}
