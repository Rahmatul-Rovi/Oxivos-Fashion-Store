import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
  return (
    <div className="group relative bg-white rounded-xl overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-lg">
      <div className="aspect-w-3 aspect-h-4 bg-gray-100 overflow-hidden relative">
        <img src={product.image} alt={product.name} className="w-full h-80 object-cover object-center transition-transform duration-500 group-hover:scale-105" />
        <span className="absolute top-3 left-3 bg-white px-2.5 py-1 text-xs font-semibold text-gray-900 rounded-md shadow-sm">
          ★ {product.rating}
        </span>
      </div>
      <div className="p-4">
        <p className="text-xs text-indigo-600 font-bold uppercase tracking-wider mb-1">{product.category}</p>
        <h3 className="text-sm font-bold text-gray-900 truncate mb-1">{product.name}</h3>
        <p className="text-base font-extrabold text-gray-900">৳{product.price}</p>
        <Link to={`/product/${product.id}`} className="mt-4 w-full block text-center bg-gray-900 text-white py-2 text-xs font-bold tracking-wider rounded-lg hover:bg-indigo-600 transition-colors">
          VIEW DETAILS
        </Link>
      </div>
    </div>
  );
}