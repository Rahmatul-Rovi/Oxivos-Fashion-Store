import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function Home() {
  const featured = products.slice(0, 4);

  return (
    <div>
      <div className="bg-gradient-to-r from-gray-900 to-indigo-950 text-white py-24 px-4 text-center rounded-2xl my-6 max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4">CURATED FASHION</h1>
        <p className="text-gray-300 max-w-xl mx-auto mb-8 text-sm md:text-base">Explore premium lifestyle apparel designed carefully for uncompromising comfort and modern elegance.</p>
        <Link to="/products" className="bg-white text-gray-900 px-8 py-3.5 font-bold tracking-wider rounded-xl hover:bg-indigo-600 hover:text-white transition-all shadow-md">EXPLORE SHOP</Link>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-black text-gray-900 tracking-tight mb-8">FEATURED PRODUCTS</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featured.map(product => <ProductCard key={product.id} product={product} />)}
        </div>
      </div>
    </div>
  );
}