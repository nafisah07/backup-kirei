import React from "react";
import "./CategoryBumbuMasakanPage3.css";

const products = [
  {
    img: "image/BUMBU MASAKAN/MSAKO AYAM RENCENG.jpg",
    name: "Masako Ayam Renceng",
    price: "Rp unknown",
    stock: "Tersedia",
  },
  {
    img: "image/BUMBU MASAKAN/RACIK AYAM GORENG REMPAH.jpg",
    name: "Racik Ayam Goreng Rempah",
    price: "Rp unknown",
    stock: "Tersedia",
  },
  {
    img: "image/BUMBU MASAKAN/RACIK AYAM GORENG.jpg",
    name: "Racik Ayam Goreng",
    price: "Rp unknown",
    stock: "Tersedia",
  },
  {
    img: "image/BUMBU MASAKAN/RACIK SAYUR LODEH.jpg",
    name: "Racik Sayur Lodeh",
    price: "Rp unknown",
    stock: "Tersedia",
  },
  {
    img: "image/BUMBU MASAKAN/RACIK TEMPE & TAHU GORENG.jpg",
    name: "Racik Tempe dan Tahu Goreng",
    price: "Rp unknown",
    stock: "Tersedia",
  },
  {
    img: "image/BUMBU MASAKAN/SAJIKU SAYUR ASEM 30gr.jpg",
    name: "Sajiku Sayur Asem 30 gr",
    price: "Rp unknown",
    stock: "Tersedia",
  },
  {
    img: "image/BUMBU MASAKAN/SAOS EXTRA HOT DELMONTE 265ml 12000.jpg",
    name: "Saos Extra Hot Delmonte 265 ml",
    price: "Rp 12.000",
    stock: "Tersedia",
  },
  {
    img: "image/BUMBU MASAKAN/SARDEN ABC 425gr 27,5rb _ 155gr _ 12rb.jpg",
    name: "Sarden ABC 425 gr",
    price: "Rp 27.500",
    stock: "Tersedia",
  },
];

const CategoryBumbuMasakanPage3 = () => (
  <>
    {/* Header */}
    <header>
      <div className="container">
        <div className="logo">
          <h1>Kirei's Mart</h1>
          <p>Sembako Lengkap & Terjangkau</p>
        </div>
        <div className="nav-icons">
          <a href="cart.html">
            <i className="fas fa-shopping-cart"></i> Keranjang <span className="cart-count">0</span>
          </a>
          <a href="account.html">
            <i className="fas fa-user"></i> Akun
          </a>
        </div>
      </div>
    </header>

    {/* Navigation */}
    <nav>
      <div className="container">
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="about.html">Tentang Kami</a></li>
          <li className="dropdown">
            <a href="products.html" className="active">
              Produk <i className="fas fa-chevron-down"></i>
            </a>
            <div className="dropdown-content">
              <a href="category-bahan-makanan.html">Bahan Makanan</a>
              <a href="category-bumbu-masakan.html" className="active">Bumbu Masakan</a>
              <a href="category-jajanan-minuman.html">Jajanan dan Minuman</a>
              <a href="category-mie.html">Mie</a>
              <a href="category-nonfood.html">Nonfood</a>
              <a href="category-obat.html">Obat-obatan</a>
            </div>
          </li>
          <li><a href="reviews.html">Ulasan</a></li>
          <li><a href="contact.html">Kontak</a></li>
        </ul>
      </div>
    </nav>

    {/* Category Hero */}
    <section className="category-hero">
      <div className="container">
        <h1>Bumbu Masakan</h1>
        <p>Bumbu dapur, rempah-rempah, saus, kecap, dan penyedap masakan untuk cita rasa masakan yang lezat</p>
      </div>
    </section>

    {/* Products Section */}
    <section className="products-section">
      <div className="container">
        <div className="filter-bar">
          <div className="filter-options">
            <select className="filter-select">
              <option value="">Semua Produk</option>
              <option value="bumbu-dapur">Bumbu Dapur</option>
              <option value="rempah">Rempah-rempah</option>
              <option value="saus">Saus & Kecap</option>
              <option value="penyedap">Penyedap Rasa</option>
            </select>
            <select className="filter-select">
              <option value="">Semua Harga</option>
              <option value="0-10000">Rp 0 - Rp 10.000</option>
              <option value="10000-25000">Rp 10.000 - Rp 25.000</option>
              <option value="25000-50000">Rp 25.000 - Rp 50.000</option>
              <option value="50000+">Rp 50.000+</option>
            </select>
          </div>
          <div className="sort-options">
            <span className="sort-label">Urutkan:</span>
            <select className="sort-select">
              <option value="popular">Paling Populer</option>
              <option value="newest">Terbaru</option>
              <option value="price-low">Harga: Rendah ke Tinggi</option>
              <option value="price-high">Harga: Tinggi ke Rendah</option>
            </select>
          </div>
        </div>
        
        <div className="products-grid">
          {products.map((p, i) => (
            <div className="product-card" key={i}>
              <div className="product-image">
                <img src={p.img} alt={p.name} />
              </div>
              <div className="product-content">
                <h3>{p.name}</h3>
                <div className="price">{p.price}</div>
                <div className="stock">Stok: {p.stock}</div>
                <div className="product-actions">
                  <button className="btn-add-cart">Tambah ke Keranjang</button>
                  <button className="btn-details">Detail</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="pagination">
          <a href="category-bumbu-masakan.html" className="pagination-item">1</a>
          <a href="category-bumbu-masakan-page2.html" className="pagination-item">2</a>
          <a href="category-bumbu-masakan-page3.html" className="pagination-item active">3</a>
          <a href="category-bumbu-masakan-page4.html" className="pagination-item">4</a>
          <a href="category-bumbu-masakan-page5.html" className="pagination-item">5</a>
          <a href="category-bumbu-masakan-page4.html" className="pagination-item"><i className="fas fa-chevron-right"></i></a>
        </div>
      </div>
    </section>

    {/* Footer */}
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <h3>Kirei's Mart</h3>
            <p>Toko sembako online terlengkap dengan harga terjangkau dan pengiriman cepat ke seluruh Indonesia.</p>
            <div className="social-icons">
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-whatsapp"></i></a>
            </div>
          </div>
          <div className="footer-col">
            <h3>Kategori</h3>
            <ul>
              <li><a href="category-bahan-makanan.html">Bahan Makanan</a></li>
              <li><a href="category-bumbu-masakan.html">Bumbu Masakan</a></li>
              <li><a href="category-jajanan-minuman.html">Jajanan dan Minuman</a></li>
              <li><a href="category-mie.html">Mie</a></li>
              <li><a href="category-nonfood.html">Nonfood</a></li>
              <li><a href="category-obat.html">Obat-obatan</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h3>Informasi</h3>
            <ul>
              <li><a href="about.html">Tentang Kami</a></li>
              <li><a href="contact.html">Hubungi Kami</a></li>
              <li><a href="faq.html">FAQ</a></li>
              <li><a href="privacy.html">Kebijakan Privasi</a></li>
              <li><a href="terms.html">Syarat & Ketentuan</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h3>Kontak</h3>
            <ul className="contact-info">
              <li><i className="fas fa-map-marker-alt"></i> Jl. Pasar Baru No. 123, Jakarta</li>
              <li><i className="fas fa-phone"></i> +62 812-3456-7890</li>
              <li><i className="fas fa-envelope"></i> info@kireimart.com</li>
              <li><i className="fas fa-clock"></i> Senin - Minggu: 08:00 - 20:00</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2023 Kirei's Mart. All Rights Reserved.</p>
          <div className="payment-methods">
            <img src="image/payment-methods.png" alt="Metode Pembayaran" />
          </div>
        </div>
      </div>
    </footer>
  </>
);

export default CategoryBumbuMasakanPage3;