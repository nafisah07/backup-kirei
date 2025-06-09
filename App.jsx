gitimport React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Kirei-s-Mart/about";
import Contact from "./Kirei-s-Mart/contact";
import Home from "./Kirei-s-Mart/home";
import Reviews from "./Kirei-s-Mart/reviews";
import CategoryBahanMakanan from "./Kirei-s-Mart/category-bahan-makanan";
import CategoryBumbuMasakan from "./Kirei-s-Mart/category-bumbu-masakan";
import CategoryJajananMinuman from "./Kirei-s-Mart/category-jajanan-minuman";
import CategoryMie from "./Kirei-s-Mart/category-mie";
import CategoryNonfood from "./Kirei-s-Mart/category-nonfood";
import CategoryObat from "./Kirei-s-Mart/category-obat";
import Navbar from "./Kirei-s-Mart/Navbar";
import Login from "./Kirei-s-Mart/login";
import Dashboard from "./Kirei-s-Mart/admin/dashboard";
import Cart from "./Kirei-s-Mart/cart";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/category-bahan-makanan"
          element={<CategoryBahanMakanan />}
        />
        <Route
          path="/category-bumbu-masakan"
          element={<CategoryBumbuMasakan />}
        />
        <Route
          path="/category-jajanan-minuman"
          element={<CategoryJajananMinuman />}
        />
        <Route path="/category-mie" element={<CategoryMie />} />
        <Route path="/category-nonfood" element={<CategoryNonfood />} />
        <Route path="/category-obat" element={<CategoryObat />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        {/* Tambahkan route lain */}
      </Routes>
    </Router>
  );
}
