import React from 'react';

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
      
      {/* Hero Intro */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest bg-indigo-50 px-3 py-1.5 rounded-full">
          Who We Are
        </span>
        <h1 className="text-4xl sm:text-6xl font-black text-gray-950 tracking-tight leading-none">
          WE DEFINE MODERN <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-500">MINIMALIST FASHION</span>
        </h1>
        <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
          Established in 2026, OXIVOS STUDIO represents a sophisticated approach to daily wear. We believe that clothing should be an extension of your personality simple, elegant, and comfortable.
        </p>
      </div>

      {/* 3-Column Core Values Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-y border-gray-100 py-12">
        <div className="space-y-2">
         
          <h3 className="text-lg font-bold text-gray-900">Premium Materials</h3>
          <p className="text-xs text-gray-500 leading-relaxed">
            We source only the finest fabrics. Every single thread is chosen to ensure longevity, softness, and maximum daily comfort.
          </p>
        </div>
        <div className="space-y-2">
          
          <h3 className="text-lg font-bold text-gray-900">Minimalist Aesthetic</h3>
          <p className="text-xs text-gray-500 leading-relaxed">
            No loud branding, no unnecessary clutter. Just clean silhouettes, timeless colors, and modern cuts designed to fit your lifestyle.
          </p>
        </div>
        <div className="space-y-2">
          
          <h3 className="text-lg font-bold text-gray-900">Customer First</h3>
          <p className="text-xs text-gray-500 leading-relaxed">
            From seamless checkout to 7-day hassle-free exchanges, your satisfaction is our core priority. We are always here to help.
          </p>
        </div>
      </div>

      {/* Two Column Journey/Philosophy Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="rounded-2xl overflow-hidden h-[350px] shadow-sm">
          <img 
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&auto=format&fit=crop&q=80" 
            alt="Our Workspace" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="space-y-5">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-950 tracking-tight">
            Crafting Elegance for the Contemporary Soul
          </h2>
          <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
            Every collection we launch undergoes rigorous testing for fit and feel. We do not mass-produce; instead, we curate limited batches to preserve uniqueness and maintain our rigorous quality standards[cite: 1].
          </p>
          <div className="pt-2 flex gap-10">
            <div>
              <p className="text-3xl font-black text-indigo-600">15k+</p>
              <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider mt-1">Happy Customers</p>
            </div>
            <div>
              <p className="text-3xl font-black text-indigo-600">99.8%</p>
              <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider mt-1">Positive Reviews</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}