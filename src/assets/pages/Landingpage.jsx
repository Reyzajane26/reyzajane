import React from 'react';
import { Car as CarIcon, ChevronRight } from 'lucide-react';
import PrimaryButton from '../components/ui/PrimaryButton.jsx';

const LandingPage = ({ onNavigate }) => (
  <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
    <div className="container mx-auto px-4 py-20">
      <div className="text-center text-white mb-20">
        <h1 className="text-7xl font-bold mb-6 animate-fade-in">
          Premium Auto Dealership
        </h1>
        <p className="text-3xl mb-4 text-blue-200">Hanap mo, Meron Kami!</p>
        <p className="text-xl mb-10 text-blue-300">
          Your trusted partner in finding the perfect car
        </p>
        <PrimaryButton 
          onClick={() => onNavigate('listing')}
          className="bg-white text-blue-900 hover:bg-blue-50 text-xl px-10 py-4"
        >
          Browse Our Collection <ChevronRight className="inline ml-2" />
        </PrimaryButton>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mt-20">
        <div className="bg-white/10 backdrop-blur-lg p-10 rounded-2xl text-white text-center hover:bg-white/20 transition-all transform hover:-translate-y-2">
          <div className="bg-blue-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CarIcon size={40} />
          </div>
          <h3 className="text-2xl font-bold mb-4">Wide Selection</h3>
          <p className="text-lg text-blue-100">
            Maraming brand at model na pagpipilian para sa iyo
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg p-10 rounded-2xl text-white text-center hover:bg-white/20 transition-all transform hover:-translate-y-2">
          <div className="bg-green-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 0 24 24">
              <path d="M15 11H9V7h6v4z"/>
              <path d="M15 15H9v-4h6v4z"/>
              <path d="M15 19H9v-4h6v4z"/>
            </svg>
          </div>
          <h3 className="text-2xl font-bold mb-4">Easy Ordering</h3>
          <p className="text-lg text-blue-100">
            Simple lang - add to cart at order na agad
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg p-10 rounded-2xl text-white text-center hover:bg-white/20 transition-all transform hover:-translate-y-2">
          <div className="bg-purple-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </div>
          <h3 className="text-2xl font-bold mb-4">Fast Processing</h3>
          <p className="text-lg text-blue-100">
            Mabilis na proseso ng dokumentasyon at delivery
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default LandingPage;