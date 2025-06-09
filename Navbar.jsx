import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "./CartContext";

export default function Navbar() {
  const location = useLocation();
  const { cart } = useCart();
  // Hide navbar on admin pages (optional, bisa diatur sesuai kebutuhan)
  if (location.pathname.startsWith("/admin")) return null;
  return (
    <>
      <nav
        style={{
          background: "#fff",
          color: "#222",
          boxShadow: "0 2px 8px #0001",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 200,
          width: "100%",
          minHeight: 60,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ul
          style={{
            display: "flex",
            gap: 80,
            listStyle: "none",
            margin: 0,
            padding: 0,
            fontWeight: 500,
            fontSize: 24,
            background: "#fff",
          }}
        >
          <li>
            <Link
              to="/"
              style={{
                color: location.pathname === "/" ? "#1976d2" : "#222",
                textDecoration:
                  location.pathname === "/" ? "underline" : "none",
                fontWeight: location.pathname === "/" ? 700 : 500,
              }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              style={{
                color: location.pathname === "/about" ? "#1976d2" : "#222",
                textDecoration:
                  location.pathname === "/about" ? "underline" : "none",
                fontWeight: location.pathname === "/about" ? 700 : 500,
              }}
            >
              Tentang Kami
            </Link>
          </li>
          <li className="dropdown">
            <span
              className={
                location.pathname.startsWith("/products") ||
                location.pathname.startsWith("/category")
                  ? "active"
                  : ""
              }
            >
              Produk <i className="fas fa-chevron-down"></i>
            </span>
            <ul className="dropdown-content">
              <li>
                <Link to="/category-bahan-makanan">Bahan Makanan</Link>
              </li>
              <li>
                <Link to="/category-bumbu-masakan">Bumbu Masakan</Link>
              </li>
              <li>
                <Link to="/category-jajanan-minuman">Jajanan dan Minuman</Link>
              </li>
              <li>
                <Link to="/category-mie">Mie</Link>
              </li>
              <li>
                <Link to="/category-nonfood">Nonfood</Link>
              </li>
              <li>
                <Link to="/category-obat">Obat-obatan</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link
              to="/contact"
              style={{
                color: location.pathname === "/contact" ? "#1976d2" : "#222",
                textDecoration:
                  location.pathname === "/contact" ? "underline" : "none",
                fontWeight: location.pathname === "/contact" ? 700 : 500,
              }}
            >
              Kontak
            </Link>
          </li>
          <li>
            <Link
              to="/reviews"
              style={{
                color: location.pathname === "/reviews" ? "#1976d2" : "#222",
                textDecoration:
                  location.pathname === "/reviews" ? "underline" : "none",
                fontWeight: location.pathname === "/reviews" ? 700 : 500,
              }}
            >
              Ulasan
            </Link>
          </li>
        </ul>
        <div
          style={{
            position: "absolute",
            right: 40,
            top: 10,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Link
            to="/cart"
            style={{
              color: "#222",
              textDecoration: "none",
              fontSize: 20,
              display: "flex",
              alignItems: "center",
            }}
          >
            <i className="fas fa-shopping-cart" style={{ marginRight: 6 }}></i>
            Keranjang
            <span
              className="cart-count"
              style={{
                marginLeft: 6,
                background: "#1976d2",
                color: "#fff",
                borderRadius: 8,
                padding: "2px 8px",
                fontSize: 16,
                marginLeft: 8,
              }}
            >
              {cart.reduce((a, b) => a + (b.qty || 1), 0)}
            </span>
          </Link>
        </div>
      </nav>
      <div style={{ minHeight: 60 }} />
    </>
  );
}
