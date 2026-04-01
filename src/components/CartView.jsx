import React from 'react';
import { ShoppingBag } from 'lucide-react';

const CartView = ({ cartItems, onRemoveFromCart, onClearCart }) => {
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-24 gap-4 bg-white rounded-2xl border border-gray-100 shadow-sm max-w-3xl mx-auto mt-8">
        <ShoppingBag className="w-16 h-16 text-gray-200" />
        <h3 className="text-xl font-bold text-gray-400">Your cart is empty</h3>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto w-full bg-white rounded-[20px] border border-gray-100 p-6 md:p-8 shadow-sm mt-8">
      <h3 className="text-xl font-bold text-gray-900 mb-6 px-1">Your Cart</h3>
      
      <div className="flex flex-col gap-4 mb-10">
        {cartItems.map((item, index) => (
          <div key={`${item.id}-${index}`} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-[#F9FAFB] rounded-xl border border-gray-50/50 transition-all hover:bg-gray-50">
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 p-2.5 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center">
                <img src={item.icon} alt={item.name} className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col gap-1">
                <h4 className="text-[15px] font-bold text-gray-900 leading-tight">{item.name}</h4>
                <span className="text-gray-500 font-medium text-[13px]">${item.price}</span>
              </div>
            </div>
            
             {/* Note: Red remove text matching screenshot exactly */}
            <button 
              onClick={() => onRemoveFromCart(item.id, index)}
              className="text-[#F43F5E] font-medium text-xs hover:text-red-700 transition-colors mt-4 sm:mt-0 sm:mr-4 self-end sm:self-auto"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between pb-6 mb-6 font-bold text-gray-900 px-2">
        <span className="text-[13px] text-gray-400 font-medium uppercase tracking-wider">Total</span>
        <span className="text-2xl">${totalPrice.toFixed(0)}</span>
      </div>

      <button 
        onClick={onClearCart}
        className="w-full bg-[#7C3AED] text-white rounded-full py-4 text-[15px] font-bold shadow-lg shadow-primary/20 hover:bg-[#6D28D9] transition-all"
      >
        Proceed To Checkout
      </button>
    </div>
  );
};

export default CartView;
