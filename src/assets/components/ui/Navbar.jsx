import React from 'react';
import { ShoppingCart } from 'lucide-react';

const Navbar = ({ cartCount, onCartClick }) => (
  <div className="bg-white shadow-md px-6 py-4 flex items-center justify-between sticky top-0 z-40">
    <div className="flex items-center gap-3">
      <svg xmlns="http://www.w3.org/2000/svg" className="text-blue-600" width="32" height="32" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.92 13.84a1 1 0 0 0-.65-.72l-2.47-1.13a1 1 0 0 0-.87-.04l-1.57.45A1 1 0 0 0 12.4 12.5V15a1 1 0 0 0 .59.88l2.47 1.13a1 1 0 0 0 .87.04l1.57-.45A1 1 0 0 0 18.4 15v-2.5a1 1 0 0 0 .59-.88zM6 18a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm12 0a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
      </svg>
      <h1 className="text-2xl font-bold text-gray-800">Premium Auto</h1>
    </div>
    <button 
      onClick={onCartClick}
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
export default Navbar;