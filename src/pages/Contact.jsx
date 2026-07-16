import React from 'react';

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Your message has been sent successfully.");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      
      <div className="text-center space-y-3 max-w-xl mx-auto">
        <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest bg-indigo-50 px-3 py-1.5 rounded-full">
          Get In Touch
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-gray-950 tracking-tight">WE'D LOVE TO HEAR FROM YOU</h1>
        <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
          Have a question about our collections, sizing, or want to track an order? Drop us a message, and our team will get back to you within 24 hours.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-6">
        
        <div className="lg:col-span-5 space-y-8 bg-gray-50 p-8 rounded-2xl border border-gray-100 flex flex-col justify-between">
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-900">Contact Information</h3>
            <p className="text-xs text-gray-500">Feel free to reach out via email, phone or visit our headquarters.</p>
            
            <div className="space-y-4 pt-4">
              <div className="flex items-center space-x-4">
             
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Email Us</p>
                  <p className="text-sm font-semibold text-gray-900">hello@oxivos.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
               
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Call Hotline</p>
                  <p className="text-sm font-semibold text-gray-900">01688399676</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
              
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Headquarters</p>
                  <p className="text-sm font-semibold text-gray-900">Mirpur, Dhaka, Bangladesh</p>
                </div>
              </div>
            </div>
          </div>

         
        </div>

        <div className="lg:col-span-7 bg-white border border-gray-100 p-8 rounded-2xl shadow-sm">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Send a Message</h3>
          
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-500 uppercase">First Name</label>
                <input 
                  type="text" 
                  required 
                  placeholder="Enter Your First Name" 
                  className="w-full text-sm px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-indigo-600 focus:bg-white transition-all"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-500 uppercase">Last Name</label>
                <input 
                  type="text" 
                  required 
                  placeholder="Enter Your Last Name" 
                  className="w-full text-sm px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-indigo-600 focus:bg-white transition-all"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-gray-500 uppercase">Email Address</label>
              <input 
                type="email" 
                required 
                placeholder="Enter Your Email" 
                className="w-full text-sm px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-indigo-600 focus:bg-white transition-all"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-gray-500 uppercase">Your Message</label>
              <textarea 
                rows="4" 
                required 
                placeholder="How can we help you?" 
                className="w-full text-sm px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-indigo-600 focus:bg-white transition-all resize-none"
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="w-full bg-gray-950 text-white text-xs font-bold tracking-widest py-4 rounded-xl hover:bg-indigo-600 transition-colors shadow-sm"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>

      </div>

    </div>
  );
}