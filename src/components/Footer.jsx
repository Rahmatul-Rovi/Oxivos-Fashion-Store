import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 text-sm mt-28 border-t border-gray-900">

     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        <div className="space-y-4">
        <h3 className="text-xl font-black tracking-wider text-white">
            OXIVOS <span className="text-indigo-500">STUDIO</span>
          </h3>
        <p className="text-xs text-gray-400 leading-relaxed">
           A premium fashion storefront delivering high-quality apparel with uncompromising comfort and modern elegance.
        </p>
    
        
        </div>

        <div className="space-y-3">
        <h4 className="text-xs font-bold text-white uppercase tracking-widest">Collections</h4>
         <ul className="space-y-2 text-xs">
           <li><Link to="/products" className="hover:text-indigo-400 transition-colors">Panjabi Collection</Link></li>
            <li><Link to="/products" className="hover:text-indigo-400 transition-colors">Western Shirts</Link></li>
         <li><Link to="/products" className="hover:text-indigo-400 transition-colors">Linen Kurtis</Link></li>
            <li><Link to="/products" className="hover:text-indigo-400 transition-colors">Smart Chinos</Link></li>
          </ul>
        </div>

      <div className="space-y-3">
         <h4 className="text-xs font-bold text-white uppercase tracking-widest">Customer Service</h4>
         <ul className="space-y-2 text-xs">
            <li className="hover:text-indigo-400 cursor-pointer transition-colors">Track Order</li>
            <li className="hover:text-indigo-400 cursor-pointer transition-colors">Return & Exchanges</li>
            <li className="hover:text-indigo-400 cursor-pointer transition-colors">Terms & Conditions</li>
            <li className="hover:text-indigo-400 cursor-pointer transition-colors">Privacy Policy</li>
         </ul>
        </div>

        <div className="space-y-3">
          <h4 className="text-xs font-bold text-white uppercase tracking-widest">Contact Us</h4>
          <ul className="space-y-2 text-xs text-gray-400">
            <li>Email: <span className="text-gray-300">hello@oxivos.com</span></li>
            <li>Call: <span className="text-gray-300">01688399676</span></li>
            <li>Location: <span className="text-gray-300">Mirpur, Dhaka</span></li>
          </ul>
        </div>

      </div>

      <div className="border-t border-gray-900 bg-gray-950/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
         <p>2026 Oxivos Fashion Store. All Rights Reserved.</p>
        <p className="font-medium">
        Developed with Love by <span className="text-gray-300 font-bold hover:text-indigo-400 transition-colors cursor-pointer">Rahmatul Munim</span>
      </p>
        </div>
      </div>
    </footer>
  );
}