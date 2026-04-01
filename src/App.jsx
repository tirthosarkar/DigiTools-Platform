import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Stats from './components/Stats';
import MainSection from './components/MainSection';
import StepsSection from './components/StepsSection';
import PricingSection from './components/PricingSection';
import Footer from './components/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [activeView, setActiveView] = useState('products');

  // Load cart from session storage? (Optional, but good practice)
  // For now, just keep in state as per requirement.

  const handleAddToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
    toast.success(`${product.name} added to cart!`, {
      position: "top-right",
      autoClose: 2000,
      theme: "colored",
    });
  };

  const handleRemoveFromCart = (productId, index) => {
    // We use index here because multiple of the same product might be in cart
    const newCart = [...cartItems];
    const removedItem = newCart.splice(index, 1)[0];
    setCartItems(newCart);
    toast.info(`${removedItem.name} removed from cart.`, {
      position: "top-right",
      autoClose: 2000,
    });
  };

  const handleClearCart = () => {
    setCartItems([]);
    toast.success("Checkout successful! Cart cleared.", {
      position: "top-center",
      autoClose: 3000,
    });
    setActiveView('products');
  };

  return (
    <div className="min-h-screen bg-white font-manrope selection:bg-primary/20 selection:text-primary">
      {/* Notifications */}
      <ToastContainer 
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      {/* Navigation */}
      <Navbar cartCount={cartItems.length} />

      {/* Hero Content */}
      <Banner />

      {/* Statistics */}
      <Stats />

      {/* Main Feature Area (Toggling Products/Cart) */}
      <MainSection 
        activeView={activeView} 
        setActiveView={setActiveView}
        onAddToCart={handleAddToCart}
        cartItems={cartItems}
        onRemoveFromCart={handleRemoveFromCart}
        onClearCart={handleClearCart}
      />

      {/* Extra Sections */}
      <StepsSection />
      <PricingSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
