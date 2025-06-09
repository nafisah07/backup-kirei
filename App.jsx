import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./about";
import Contact from "./contact";
import Home from "./home";
import Reviews from "./reviews";
import CategoryBahanMakanan from "./category-bahan-makanan";
import CategoryBumbuMasakan from "./category-bumbu-masakan";
import CategoryJajananMinuman from "./category-jajanan-minuman";
import CategoryMie from "./category-mie";
import CategoryNonfood from "./category-nonfood";
import CategoryObat from "./category-obat";
import Navbar from "./Navbar";
import Login from "./login";
import Dashboard from "./admin/dashboard";
import Cart from "./cart";

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
