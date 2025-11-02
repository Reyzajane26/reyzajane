import React from "react";
import { Car, ShoppingCart, Clock } from "lucide-react";
import PrimaryButton from "../../components/ui/primarybutton";

const LandingPage = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-700 via-pink-600 to-purple-900 text-white">
      {/* HERO SECTION */}
      <div className="container mx-auto px-6 py-20 flex flex-col-reverse md:flex-row items-center gap-12">
        <div className="md:w-1/2 space-y-6 text-center md:text-left animate-fade-in">
          <h1 className="text-6xl font-extrabold leading-tight">
            Find Your <span className="text-pink-300">Perfect Ride</span>
          </h1>
          <p className="text-xl text-pink-100">
            At <span className="font-semibold text-white">Paulino Car Dealership</span>, 
            we bring your dream car closer than ever.
          </p>
          <PrimaryButton
            onClick={() => onNavigate("listing")}
            className="bg-pink-500 hover:bg-pink-600 text-white text-lg px-8 py-3 rounded-full shadow-lg transition-transform transform hover:scale-105"
          >
            Explore Now
          </PrimaryButton>
        </div>

        <div className="md:w-1/2 flex justify-center animate-fade-in-up">
          <img
            src="https://cdn.pixabay.com/photo/2017/03/27/14/56/car-2179307_1280.png"
            alt="Luxury Car"
            className="w-4/5 rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>

      {/* FEATURES SECTION */}
      <div className="container mx-auto px-6 mt-24 grid md:grid-cols-3 gap-10">
        <div className="bg-white/10 backdrop-blur-lg p-10 rounded-2xl text-center hover:bg-white/20 transition-all shadow-lg hover:scale-105">
          <div className="bg-pink-500/80 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5">
            <Car size={36} />
          </div>
          <h3 className="text-2xl font-semibold mb-3">Wide Selection</h3>
          <p className="text-pink-100">
            Explore a vast collection of cars—from affordable to luxury models.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg p-10 rounded-2xl text-center hover:bg-white/20 transition-all shadow-lg hover:scale-105">
          <div className="bg-rose-500/80 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5">
            <ShoppingCart size={36} />
          </div>
          <h3 className="text-2xl font-semibold mb-3">Smooth Transactions</h3>
          <p className="text-pink-100">
            Experience a stress-free and transparent car buying process.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg p-10 rounded-2xl text-center hover:bg-white/20 transition-all shadow-lg hover:scale-105">
          <div className="bg-fuchsia-500/80 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5">
            <Clock size={36} />
          </div>
          <h3 className="text-2xl font-semibold mb-3">Fast Delivery</h3>
          <p className="text-pink-100">
            Get your vehicle ready for the road in no time.
          </p>
        </div>
      </div>

      {/* FOOTER */}
      <div className="text-center text-pink-200 mt-20 pb-10 text-sm">
        © 2025 Paulino Car Dealership — All rights reserved.
      </div>
    </div>
  );
};

export default LandingPage;
