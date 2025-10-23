import React from 'react';
import { ShoppingCart, Car } from 'lucide-react';

const Navbar = ({ cartCount, onCartClick }) => {
  return (
    <div className="bg-white shadow-md px-6 py-4 flex items-center justify-between sticky top-0 z-40">
      <div className="flex items-center gap-3">
        <Car className="text-blue-600" size={32} />
        <h1 className="text-2xl font-bold text-gray-800">Premium Auto</h1>
      </div>
      <button 
        onClick={onCartClick}
        aria-label={`View shopping cart with ${cartCount} items`}
        className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors"
      >
        <ShoppingCart size={28} className="text-gray-700" />
        {cartCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
            {cartCount}
          </span>
        )}
      </button>
    </div>
  );
};

export default Navbar;