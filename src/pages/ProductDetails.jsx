import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import Swal from 'sweetalert2';

export default function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) return <div className="text-center py-20 text-gray-500 font-bold">Product not found.</div>;

  const [color, setColor] = useState(product.colors[0]);
  const [size, setSize] = useState(product.sizes[0]);

  const handleAdd = () => {
    addToCart(product, color, size);
    
   Swal.fire({
      title: 'Added to Cart!',
      text: `${product.name} (${color} - ${size}) has been added to your shopping cart.`,
      icon: 'success',
      confirmButtonText: 'Continue Shopping',
      confirmButtonColor: '#4f46e5', 
      background: '#ffffff',
      iconColor: '#4f46e5',
      customClass: {
        popup: 'rounded-2xl shadow-xl border border-gray-100 p-6',
        title: 'text-xl font-bold text-gray-950',
        htmlContainer: 'text-xs text-gray-500 mt-2',
        confirmButton: 'px-6 py-2.5 text-xs font-bold tracking-wider rounded-xl focus:outline-none'
      }
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <div className="rounded-xl overflow-hidden bg-gray-50 border border-gray-100">
          <img src={product.image} alt={product.name} className="w-full h-[500px] object-cover" />
        </div>
        <div className="space-y-6">
          <div>
            <span className="text-xs font-bold text-indigo-600 tracking-widest uppercase">{product.category}</span>
            <h1 className="text-2xl md:text-3xl font-black text-gray-900 mt-1 mb-2">{product.name}</h1>
            <p className="text-xl font-extrabold text-gray-900">৳{product.price}</p>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">{product.description}</p>
          
          <div>
            <h3 className="text-xs font-bold text-gray-900 tracking-wider mb-2">SELECT COLOR</h3>
            <div className="flex gap-2">
              {product.colors.map(c => (
                <button 
                  key={c} 
                  onClick={() => setColor(c)} 
                  className={`px-4 py-2 text-xs font-semibold rounded-lg border transition-all ${
                    color === c 
                      ? 'border-indigo-600 bg-indigo-50 text-indigo-600' 
                      : 'border-gray-200 text-gray-700 hover:border-gray-900'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold text-gray-900 tracking-wider mb-2">SELECT SIZE</h3>
            <div className="flex gap-2">
              {product.sizes.map(s => (
                <button 
                  key={s} 
                  onClick={() => setSize(s)} 
                  className={`px-4 py-2 text-xs font-semibold rounded-lg border transition-all ${
                    size === s 
                      ? 'border-indigo-600 bg-indigo-50 text-indigo-600' 
                      : 'border-gray-200 text-gray-700 hover:border-gray-900'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <button 
            onClick={handleAdd} 
            className="w-full bg-gray-900 text-white py-4 text-xs font-bold tracking-wider rounded-xl hover:bg-indigo-600 transition-colors shadow-sm"
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
}