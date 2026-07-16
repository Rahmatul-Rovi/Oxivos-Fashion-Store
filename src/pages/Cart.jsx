import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'; 

export default function Cart() {
  const { cart, updateQuantity, removeFromCart, cartTotal } = useCart();

  const handleDeleteConfirm = (id, color, size, name) => {
    Swal.fire({
      title: 'Are you sure?',
      text: `Do you want to remove "${name} (${color} - ${size})" from your cart?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#ef4444', 
      cancelButtonColor: '#6b7280', 
      confirmButtonText: 'Yes, remove it!',
      cancelButtonText: 'No, keep it',
      background: '#ffffff',
      customClass: {
        popup: 'rounded-2xl shadow-xl border border-gray-100 p-6',
        title: 'text-xl font-bold text-gray-950',
        htmlContainer: 'text-xs text-gray-500 mt-2',
        confirmButton: 'px-5 py-2.5 text-xs font-bold tracking-wider rounded-xl focus:outline-none',
        cancelButton: 'px-5 py-2.5 text-xs font-bold tracking-wider rounded-xl focus:outline-none'
      }
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromCart(id, color, size);
        
        Swal.fire({
          title: 'Removed!',
          text: 'The item has been removed from your cart.',
          icon: 'success',
          timer: 1500,
          showConfirmButton: false,
          confirmButtonColor: '#4f46e5',
          background: '#ffffff',
          customClass: {
            popup: 'rounded-2xl shadow-md p-4',
            title: 'text-lg font-bold text-gray-950',
            htmlContainer: 'text-xs text-gray-500'
          }
        });
      }
    });
  };

  if (cart.length === 0) {
    return (
      <div className="max-w-md mx-auto text-center py-24 px-4 space-y-4">
        <div className="text-gray-300 flex justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
        </div>
        <h2 className="text-xl font-bold text-gray-900">Your Cart is Empty</h2>
        <p className="text-gray-500 text-sm">Looks like you haven't added anything to your cart yet.</p>
        <Link to="/products" className="inline-block bg-gray-900 text-white px-6 py-3 text-xs font-bold tracking-wider rounded-xl hover:bg-indigo-600 transition-colors">START SHOPPING</Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-black text-gray-900 tracking-tight mb-8">SHOPPING CART</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {cart.map((item, idx) => (
            <div key={idx} className="flex items-center justify-between border border-gray-100 rounded-xl p-4 bg-white shadow-sm">
              <div className="flex items-center space-x-4">
                <img src={item.image} alt={item.name} className="w-16 h-20 object-cover rounded-lg" />
                <div>
                  <h3 className="text-sm font-bold text-gray-900 truncate max-w-xs">{item.name}</h3>
                  <p className="text-xs text-gray-500 mt-0.5">Size: {item.size} | Color: {item.color}</p>
                  <p className="text-sm font-extrabold text-gray-900 mt-1">৳{item.price}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden bg-gray-50">
                  <button onClick={() => updateQuantity(item.id, item.color, item.size, -1)} className="px-3 py-1 hover:bg-gray-200 text-gray-600 font-bold">-</button>
                  <span className="px-3 text-xs font-bold text-gray-900">{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.color, item.size, 1)} className="px-3 py-1 hover:bg-gray-200 text-gray-600 font-bold">+</button>
                </div>
              
                <button 
                  onClick={() => handleDeleteConfirm(item.id, item.color, item.size, item.name)} 
                  className="text-red-500 hover:text-red-700 p-1 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 h-fit space-y-4">
          <h2 className="text-lg font-bold text-gray-900 tracking-tight">ORDER SUMMARY</h2>
          <div className="flex justify-between text-sm border-b border-gray-200 pb-3 text-gray-600">
            <span>Subtotal</span>
            <span className="font-bold text-gray-900">৳{cartTotal}</span>
          </div>
          <div className="flex justify-between text-base font-black text-gray-900 pt-1">
            <span>Total Payable</span>
            <span>৳{cartTotal}</span>
          </div>
          <button className="w-full bg-indigo-600 text-white py-3.5 text-xs font-bold tracking-wider rounded-xl hover:bg-indigo-700 transition-colors shadow-sm">PROCEED TO CHECKOUT</button>
        </div>
      </div>
    </div>
  );
}