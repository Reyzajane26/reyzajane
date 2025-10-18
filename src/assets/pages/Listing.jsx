import React from 'react';
import { ShoppingCart } from 'lucide-react';

const CarListing = ({ cars, onAddToCart }) => {
  return (
    <div className="p-8 bg-slate-100 min-h-full">
      <div className="mb-8">
        <h2 className="text-4xl font-bold text-gray-800 mb-2">Available Cars</h2>
        <p className="text-gray-600">Choose your desired car and add it to the cart.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cars.map(car => (
          <div key={car.id} className="bg-white rounded-xl shadow-lg overflow-hidden group transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
            <div className="relative">
              <img src={car.image} alt={car.name} className="w-full h-56 object-cover" />
              <div className="absolute top-0 left-0 bg-gray-900 text-white px-3 py-1 text-sm font-semibold rounded-br-lg">
                {car.year}
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{car.name}</h3>
              <p className="text-gray-600 mb-4">{car.specs}</p>
              <div className="flex justify-between items-center">
                <span className="text-3xl font-bold text-orange-600">
                  ₱{car.price.toLocaleString()}
                </span>
                <button 
                  onClick={() => onAddToCart(car)}
                  className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors flex items-center gap-2 font-semibold"
                >
                  <ShoppingCart size={18} />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarListing;