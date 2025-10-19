import React, { useState } from 'react';
import { Menu, X, Home, Car, FileText } from 'lucide-react';
import Navbar from './components/ui/navbar';
import LandingPage from './pages/user/LandingPage';
import CarListing from './pages/user/listing';
import OrderForm from './pages/user/order';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('landing');
  const [cart, setCart] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const addToCart = (car) => {
    const existing = cart.find(item => item.id === car.id);
    if (!existing) {
      setCart([...cart, { ...car, quantity: 1 }]);
      alert(`${car.name} added to cart!`);
    } else {
      alert('Item already in cart!');
    }
  };

  const removeFromCart = (carId) => {
    setCart(cart.filter(item => item.id !== carId));
  };

  const updateQuantity = (carId, newQty) => {
    if (newQty < 1) return;
    setCart(cart.map(item => 
      item.id === carId ? { ...item, quantity: newQty } : item
    ));
  };

  const handleSubmit = (formData) => {
    console.log('Order submitted:', formData);
    alert('Order submitted successfully! Makikipag-ugnayan kami sa inyo.');
    setCart([]);
    setCurrentPage('landing');
  };

  const cars = [
    { id: 1, name: 'Toyota Vios', price: 950000, image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=500', specs: 'Automatic, 1.3L Engine', year: 2024, brand: 'Toyota' },
    { id: 2, name: 'Honda City', price: 1050000, image: 'https://images.unsplash.com/photo-1583267746897-c0d5b0e5d2c6?w=500', specs: 'Automatic, 1.5L Engine', year: 2024, brand: 'Honda' },
    { id: 3, name: 'Mitsubishi Mirage', price: 750000, image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=500', specs: 'Manual, 1.2L Engine', year: 2024, brand: 'Mitsubishi' },
    { id: 4, name: 'Ford Ranger Raptor', price: 1850000, image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=500', specs: 'Automatic, 2.0L Turbo', year: 2024, brand: 'Ford' },
    { id: 5, name: 'Suzuki Swift', price: 850000, image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=500', specs: 'Automatic, 1.2L Engine', year: 2024, brand: 'Suzuki' },
    { id: 6, name: 'Mazda CX-5', price: 1650000, image: 'https://images.unsplash.com/photo-1581540222194-0def2dda95b8?w=500', specs: 'Automatic, 2.5L Engine', year: 2024, brand: 'Mazda' }
  ];

  const renderPage = () => {
    switch (currentPage) {
      case 'listing':
        return <CarListing cars={cars} onAddToCart={addToCart} />;
      case 'order':
        return <OrderForm cart={cart} onRemove={removeFromCart} onUpdateQuantity={updateQuantity} onSubmit={handleSubmit} />;
      case 'landing':
      default:
        return <LandingPage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'w-72' : 'w-20'} bg-gradient-to-b from-gray-900 to-gray-800 text-white transition-all duration-300 flex flex-col shadow-2xl`}>
        <div className="p-5 flex items-center justify-between border-b border-gray-700">
          {sidebarOpen && <h1 className="text-2xl font-bold">Dashboard</h1>}
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="hover:bg-gray-700 p-2 rounded-lg transition-colors">
            {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <nav className="flex-1 p-4">
          <button 
            onClick={() => setCurrentPage('landing')}
            className={`w-full flex items-center gap-4 p-4 rounded-xl mb-3 hover:bg-gray-700 transition-all ${currentPage === 'landing' ? 'bg-blue-600 shadow-lg' : ''}`}
          >
            <Home size={24} />
            {sidebarOpen && <span className="font-semibold text-lg">Landing Page</span>}
          </button>

          <button 
            onClick={() => setCurrentPage('listing')}
            className={`w-full flex items-center gap-4 p-4 rounded-xl mb-3 hover:bg-gray-700 transition-all ${currentPage === 'listing' ? 'bg-blue-600 shadow-lg' : ''}`}
          >
            <Car size={24} />
            {sidebarOpen && <span className="font-semibold text-lg">Car Listing</span>}
          </button>

          <button 
            onClick={() => setCurrentPage('order')}
            className={`w-full flex items-center gap-4 p-4 rounded-xl mb-3 hover:bg-gray-700 transition-all ${currentPage === 'order' ? 'bg-blue-600 shadow-lg' : ''}`}
          >
            <FileText size={24} />
            {sidebarOpen && <span className="font-semibold text-lg">Order Form</span>}
            {cart.length > 0 && (
              <span className="ml-auto bg-red-500 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold">
                {cart.length}
              </span>
            )}
          </button>
        </nav>

        {sidebarOpen && (
          <div className="p-5 border-t border-gray-700">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-4 rounded-xl shadow-lg">
              <p className="text-sm text-blue-200 mb-1">Cart Items</p>
              <p className="text-3xl font-bold">{cart.length}</p>
            </div>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar cartCount={cart.length} onCartClick={() => setCurrentPage('order')} />
        
        <div className="flex-1 overflow-auto">
          {renderPage()}
        </div>
      </div>
    </div>
  );
}

export default App;