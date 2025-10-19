import React from 'react';
import { ShoppingCart } from 'lucide-react';
import Card from '../../components/ui/card';

const CarListing = ({ cars, onAddToCart }) => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <h2 className="text-5xl font-bold text-gray-800 mb-3">Available Cars</h2>
          <p className="text-xl text-gray-600">Choose your dream car and add it to the cart</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map(car => (
            <Card key={car.id} className="hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="relative">
                <img src={car.image} alt={car.name} className="w-full h-56 object-cover" />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                  {car.year}
                </div>
              </div>
              <div className="p-6">
                <div className="mb-2">
                  <span className="text-sm text-gray-500 font-semibold">{car.brand}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{car.name}</h3>
                <p className="text-gray-600 mb-4">{car.specs}</p>
                <div className="flex justify-between items-center mt-4">
                  <div>
                    <p className="text-sm text-gray-500">Starting at</p>
                    <span className="text-3xl font-bold text-blue-600">
                      ₱{car.price.toLocaleString()}
                    </span>
                  </div>
                  <button 
                    onClick={() => onAddToCart(car)}
                    className="bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 font-semibold"
                  >
                    <ShoppingCart size={20} />
                    Add to Cart
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarListing;