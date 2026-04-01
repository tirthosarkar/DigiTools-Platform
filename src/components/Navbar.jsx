import React from 'react';
import { ShoppingCart } from 'lucide-react';

const Navbar = ({ cartCount }) => {
  return (
    <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100 flex justify-center w-full">
      <div className="navbar max-w-7xl mx-auto px-4 lg:px-12 py-3 w-full justify-between">
        <div className="navbar-start w-auto">
          <a className="text-3xl font-extrabold bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent tracking-tight cursor-pointer pb-1">
            DigiTools
          </a>
        </div>
        
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold text-gray-600 gap-4">
            <li className="hover:text-primary transition-colors cursor-pointer text-sm">Products</li>
            <li className="hover:text-primary transition-colors cursor-pointer text-sm">Features</li>
            <li className="hover:text-primary transition-colors cursor-pointer text-sm">Pricing</li>
            <li className="hover:text-primary transition-colors cursor-pointer text-sm">Testimonials</li>
            <li className="hover:text-primary transition-colors cursor-pointer text-sm">FAQ</li>
          </ul>
        </div>

        <div className="navbar-end gap-3 lg:gap-6 w-auto">
          {/* Cart Icon */}
          <div className="indicator cursor-pointer mr-2 flex items-center justify-center p-2 rounded-full hover:bg-gray-100 transition-colors" id="cart-icon">
            {cartCount > 0 && (
              <span className="indicator-item badge badge-primary border-none text-white font-bold text-[10px] w-4 h-4 p-0">
                {cartCount}
              </span>
            )}
            <ShoppingCart className="w-5 h-5 text-gray-700" />
          </div>

          <button className="text-gray-700 text-sm font-bold hover:text-primary hidden sm:block mr-2">
            Login
          </button>

          <button className="bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white rounded-full px-6 min-h-0 h-10 text-sm font-bold shadow-lg shadow-purple-500/30 hover:opacity-90 transition-opacity whitespace-nowrap">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
