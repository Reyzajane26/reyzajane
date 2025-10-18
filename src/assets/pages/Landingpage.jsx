import React from 'react';
import { Car as CarIcon, ChevronRight, ShoppingCart, FileText } from 'lucide-react';
import PrimaryButton from '../components/ui/PrimaryButton.jsx';

const LandingPage = ({ onNavigate }) => (
  <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
    <div className="container mx-auto px-4 py-24">
      <div className="text-center mb-20">
        <h1 className="text-6xl md:text-7xl font-bold mb-4 animate-fade-in bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-300">
          Premium Auto Dealership
        </h1>
        <p className="text-2xl md:text-3xl mb-4 text-blue-200">Your Dream Car Awaits</p>
        <p className="text-lg md:text-xl mb-10 text-blue-300 max-w-3xl mx-auto">
          Your trusted partner in finding the perfect car. Explore our curated collection of brand new and premium vehicles.
        </p>
        <PrimaryButton 
          onClick={() => onNavigate('listing')}
          className="bg-orange-500 text-white hover:bg-orange-600 text-xl px-10 py-4 shadow-lg shadow-orange-500/50 transform hover:scale-105"
        >
          Browse Our Collection <ChevronRight className="inline ml-2" />
        </PrimaryButton>
      </div>

      <div className="grid md:grid-cols-3 gap-10 mt-24">
        <div className="bg-gray-800/50 backdrop-blur-lg p-8 rounded-2xl text-center border border-gray-700 hover:border-blue-500 transition-all transform hover:-translate-y-2">
          <div className="bg-orange-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-orange-500/40">
            <CarIcon size={40} />
          </div>
          <h3 className="text-2xl font-bold mb-4">Wide Selection</h3>
          <p className="text-lg text-gray-300">
            Choose from a wide variety of brands and models.
          </p>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-lg p-8 rounded-2xl text-center border border-gray-700 hover:border-teal-500 transition-all transform hover:-translate-y-2">
          <div className="bg-orange-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-orange-500/40">
            <ShoppingCart size={40} />
          </div>
          <h3 className="text-2xl font-bold mb-4">Easy Ordering</h3>
          <p className="text-lg text-gray-300">
            A simple and seamless ordering process.
          </p>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-lg p-8 rounded-2xl text-center border border-gray-700 hover:border-indigo-500 transition-all transform hover:-translate-y-2">
          <div className="bg-orange-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-orange-500/40">
            <FileText size={40} />
          </div>
          <h3 className="text-2xl font-bold mb-4">Fast Processing</h3>
          <p className="text-lg text-gray-300">
            Quick documentation and delivery process.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default LandingPage;