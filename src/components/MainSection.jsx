import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import CartView from './CartView';
import productsData from '../data/products.json';
import { toast } from 'react-toastify';
import { Search, Filter, ShoppingBag, LayoutGrid } from 'lucide-react';

const MainSection = ({ activeView, setActiveView, onAddToCart, cartItems, onRemoveFromCart, onClearCart }) => {
  return (
    <section className="py-24 px-4 lg:px-12 bg-[#F9FAFB] min-h-screen">
      
      {/* Search & Toggle Area */}
      <div className="flex flex-col items-center mb-12 gap-6 text-center">
        <div className="flex flex-col gap-3">
          <h2 className="text-3xl lg:text-[40px] font-bold text-gray-900">
            Premium Digital Tools
          </h2>
          <p className="text-[#6B7280] text-sm max-w-2xl mx-auto">
            Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
          </p>
        </div>
        
        {/* Toggle Buttons */}
        <div className="flex items-center gap-4 bg-white px-2 py-2 rounded-full border border-gray-200">
          <button 
            onClick={() => setActiveView('products')}
            className={`px-6 py-2 rounded-full font-bold text-sm transition-all duration-300 ${
              activeView === 'products' 
              ? 'bg-primary text-white' 
              : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Products
          </button>
          <button 
            onClick={() => setActiveView('cart')}
            className={`px-6 py-2 rounded-full font-bold text-sm transition-all duration-300 ${
              activeView === 'cart' 
              ? 'bg-primary text-white' 
              : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Cart [{cartItems.length}]
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto">
        {activeView === 'products' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productsData.map(product => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onAddToCart={onAddToCart} 
              />
            ))}
          </div>
        ) : (
          <CartView 
            cartItems={cartItems} 
            onRemoveFromCart={onRemoveFromCart} 
            onClearCart={onClearCart} 
          />
        )}
      </div>

    </section>
  );
};

export default MainSection;
