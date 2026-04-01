import React, { useState } from 'react';
import { Check, Star } from 'lucide-react';

const ProductCard = ({ product, onAddToCart }) => {
  const [isAdded, setIsAdded] = useState(false);

  const handleBuyNow = () => {
    onAddToCart(product);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const tagColor = product.tagType === 'popular' ? 'badge-warning' : 'badge-success';

  return (
    <div className="card bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 card-shadow">
      <figure className="px-8 pt-8 relative">
        <div className={`absolute top-4 right-4 badge ${tagColor} text-white font-bold text-xs py-3 px-3 uppercase tracking-wider`}>
          {product.tag}
        </div>
        <div className="w-20 h-20 p-4 bg-primary/5 rounded-2xl border border-primary/10 group-hover:scale-110 transition-transform">
          <img src={product.icon} alt={product.name} className="w-full h-full object-contain" />
        </div>
      </figure>
      
      <div className="card-body p-8">
        <h2 className="card-title text-2xl font-bold text-gray-900 mb-2">{product.name}</h2>
        <p className="text-gray-500 text-sm leading-relaxed mb-4">{product.description}</p>
        
        <div className="flex items-baseline gap-1 mb-6">
          <span className="text-3xl font-extrabold text-primary">${product.price}</span>
          <span className="text-gray-400 font-medium italic text-sm">/{product.period}</span>
        </div>

        <div className="space-y-3 mb-8">
          {product.features.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                <Check className="w-3 h-3 text-white stroke-[3px]" />
              </div>
              <span className="text-gray-600 text-sm font-medium">{feature}</span>
            </div>
          ))}
        </div>

        <div className="card-actions">
          <button 
            disabled={isAdded}
            onClick={handleBuyNow}
            className={`btn w-full rounded-2xl h-14 min-h-0 text-lg font-bold shadow-lg transition-all duration-300 ${
              isAdded 
              ? 'btn-success text-white shadow-success/20' 
              : 'btn-primary-gradient shadow-primary/20 hover:scale-[1.02]'
            }`}
          >
            {isAdded ? 'Added to cart' : 'Buy Now'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
