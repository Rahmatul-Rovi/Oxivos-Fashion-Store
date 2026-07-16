import React from 'react';
import { Link } from 'react-router-dom'; 
import { Link as RouterLink } from 'react-router-dom'; 
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function Home() {
  
  const featured = products.slice(0, 4);

  const categories = ['Panjabi', 'Kurti', 'Shirt', 'Pants'];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 pt-6">
    
     <div className="bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden grid grid-cols-1 md:grid-cols-2 items-center gap-8 p-8 sm:p-12">
  
  <div className="flex flex-col items-start text-left space-y-4">
    <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest">
      New Arrivals 2026
    </span>
    <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-950 tracking-tight leading-tight">
      Modern Elegance. <br />Everyday Comfort.
    </h1>
    <p className="text-gray-500 text-xs sm:text-sm max-w-md leading-relaxed">
      Explore our latest collection crafted carefully with premium fabrics for a clean and minimalist look.
    </p>
    <RouterLink 
      to="/products" 
      className="inline-block bg-gray-950 text-white text-xs font-bold tracking-widest px-6 py-3.5 rounded-lg hover:bg-indigo-600 transition-colors shadow-sm"
    >
      SHOP THE COLLECTION
    </RouterLink>
  </div>

  <div className="h-[300px] sm:h-[380px] w-full rounded-xl overflow-hidden shadow-sm">
    <img 
      src="https://i.ibb.co.com/ksY5bJpj/womens-fashion-1.jpg" 
      alt="Oxivos Minimalist Fashion" 
      className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700 ease-out"
    />
  </div>

</div>

      <div className="border-y border-gray-100 py-6">
        <p className="text-center text-xs font-bold text-gray-600 uppercase tracking-widest mb-4">
          Browse by Category
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category, index) => (
            <RouterLink
              key={index}
              to="/products"
              className="px-5 py-2 text-xs font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:border-gray-900 hover:text-gray-900 transition-colors"
            >
              {category}
            </RouterLink>
          ))}
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-bold text-gray-900 tracking-tight">Featured Products</h2>
          <RouterLink 
            to="/products" 
            className="text-xs font-bold text-indigo-600 hover:underline flex items-center"
          >
            View All
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </RouterLink>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featured.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

    </div>
  );
}