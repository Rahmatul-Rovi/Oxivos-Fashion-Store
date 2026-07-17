import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const { cartCount } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  const linkStyle = ({ isActive }) => 
    `font-semibold text-xs tracking-wider transition-colors uppercase block md:inline-block ${
      isActive ? 'text-indigo-600' : 'text-gray-600 hover:text-indigo-600'
    }`;

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        <div className="flex items-center space-x-3">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden p-2 rounded-lg text-gray-600 hover:text-indigo-600 hover:bg-gray-50 transition-colors focus:outline-none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          <Link to="/" className="text-2xl font-black tracking-wider text-gray-900">
            OXIVOS <span className="text-indigo-600">STUDIO</span>
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <NavLink to="/" className={linkStyle}>HOME</NavLink>
          <NavLink to="/products" className={linkStyle}>SHOP</NavLink>
          <NavLink to="/about" className={linkStyle}>ABOUT US</NavLink>
          <NavLink to="/contact" className={linkStyle}>CONTACT US</NavLink>
        </div>

        <div className="flex items-center space-x-6">
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
          
          <Link 
            to="/login" 
            className="text-xs font-bold text-gray-950 tracking-wider hover:text-indigo-600 transition-colors uppercase"
          >
            LOGIN
          </Link>
        </div>

      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-4 shadow-inner">
          <NavLink to="/" onClick={() => setIsOpen(false)} className={linkStyle}>HOME</NavLink>
          <NavLink to="/products" onClick={() => setIsOpen(false)} className={linkStyle}>SHOP</NavLink>
          <NavLink to="/about" onClick={() => setIsOpen(false)} className={linkStyle}>ABOUT US</NavLink>
          <NavLink to="/contact" onClick={() => setIsOpen(false)} className={linkStyle}>CONTACT US</NavLink>
        </div>
      )}
    </nav>
  );
}