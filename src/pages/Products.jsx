import React, { useState } from 'react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', ...new Set(products.map(p => p.category))];

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-black text-gray-900 tracking-tight mb-6">OUR COLLECTIONS</h1>
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map(cat => (
          <button key={cat} onClick={() => setSelectedCategory(cat)} className={`px-5 py-2 text-xs font-bold tracking-wider rounded-lg transition-all border ${selectedCategory === cat ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-gray-700 border-gray-200 hover:border-gray-900'}`}>{cat.toUpperCase()}</button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map(product => <ProductCard key={product.id} product={product} />)}
      </div>
    </div>
  );
}