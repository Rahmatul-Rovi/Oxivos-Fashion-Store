import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import About from './pages/About';
import Contact from './pages/Contact';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white text-gray-900 antialiased">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<React.Suspense fallback={<div>Loading...</div>}><Products /></React.Suspense>} />
             <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
              <Route path='/about' element={<About/>} />
             <Route path='/contact' element={<Contact/>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}