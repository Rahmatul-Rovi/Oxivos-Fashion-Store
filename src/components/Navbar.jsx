import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const { cartCount } = useCart();

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="text-2xl font-black tracking-wider text-gray-900">OXIVOS <span className="text-indigo-600">STUDIO</span></Link>
        <div className="flex items-center space-x-8">
          <NavLink to="/" className={({ isActive }) => `font-medium text-sm transition-colors ${isActive ? 'text-indigo-600' : 'text-gray-600 hover:text-gray-900'}`}>HOME</NavLink>
          <NavLink to="/products" className={({ isActive }) => `font-medium text-sm transition-colors ${isActive ? 'text-indigo-600' : 'text-gray-600 hover:text-gray-900'}`}>SHOP</NavLink>
          <Link to="/cart" className="relative p-2 text-gray-700 hover:text-indigo-600 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-indigo-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}