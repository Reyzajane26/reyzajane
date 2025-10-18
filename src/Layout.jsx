import React, { useState } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { ShoppingCart, Car, Home, FileText, Menu, X } from 'lucide-react';

const Layout = () => {
  // Note: For a real app, this state should be moved to a global state manager like Context API
  const [cart, setCart] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    paymentMethod: 'installment'
  });

  const navigate = useNavigate();

  const cars = [
    { id: 1, name: 'Toyota Vios', price: 950000, image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=500', specs: 'Automatic, 1.3L Engine', year: 2024 },
    { id: 2, name: 'Honda City', price: 1050000, image: 'https://images.unsplash.com/photo-1583267746897-c0d5b0e5d2c6?w=500', specs: 'Automatic, 1.5L Engine', year: 2024 },
    { id: 3, name: 'Mitsubishi Mirage', price: 750000, image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=500', specs: 'Manual, 1.2L Engine', year: 2024 },
    { id: 4, name: 'Ford Ranger', price: 1450000, image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=500', specs: 'Automatic, 2.0L Turbo', year: 2024 },
    { id: 5, name: 'Suzuki Swift', price: 850000, image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=500', specs: 'Automatic, 1.2L Engine', year: 2024 },
    { id: 6, name: 'Mazda CX-5', price: 1850000, image: 'https://images.unsplash.com/photo-1581540222194-0def2dda95b8?w=500', specs: 'Automatic, 2.5L Engine', year: 2024 }
  ];

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

  const handleSubmit = () => {
    if (cart.length === 0) {
      alert('Cart is empty!');
      return;
    }
    if (!formData.fullName || !formData.email || !formData.phone || !formData.address) {
      alert('Please fill in all fields!');
      return;
    }
    alert('Order submitted successfully! We will contact you shortly.');
    setCart([]);
    setFormData({ fullName: '', email: '', phone: '', address: '', paymentMethod: 'installment' });
    navigate('/');
  };

  // Pass down state and functions to the child routes via context prop of Outlet
  const outletContext = {
    cars,
    cart,
    formData,
    setFormData,
    addToCart,
    removeFromCart,
    updateQuantity,
    handleSubmit,
  };

  return (
    <div className="flex h-screen bg-slate-100">
      <div className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-gray-900 text-white transition-all duration-300 flex flex-col`}>
        <div className="p-4 flex items-center justify-between border-b border-gray-700">
          {sidebarOpen && <h1 className="text-xl font-bold">Premium Auto</h1>}
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="hover:bg-gray-800 p-2 rounded">
            {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <nav className="flex-1 p-4">
          <NavLink
            to="/"
            className={({ isActive }) => `w-full flex items-center gap-4 p-3 rounded-lg mb-2 hover:bg-gray-800 transition-colors ${isActive ? 'bg-orange-500' : ''}`}
          >
            <Home size={24} />
            {sidebarOpen && <span>Home</span>}
          </NavLink>

          <NavLink
            to="/listing"
            className={({ isActive }) => `w-full flex items-center gap-4 p-3 rounded-lg mb-2 hover:bg-gray-800 transition-colors ${isActive ? 'bg-orange-500' : ''}`}
          >
            <Car size={24} />
            {sidebarOpen && <span>Car Listing</span>}
          </NavLink>

          <NavLink
            to="/order"
            className={({ isActive }) => `w-full flex items-center gap-4 p-3 rounded-lg mb-2 hover:bg-gray-800 transition-colors ${isActive ? 'bg-orange-500' : ''}`}
          >
            <FileText size={24} />
            {sidebarOpen && <span>Order Form</span>}
            {cart.length > 0 && (
              <span className="ml-auto bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
                {cart.length}
              </span>
            )}
          </NavLink>
        </nav>

        {sidebarOpen && (
          <div className="p-4 border-t border-gray-700">
            <div className="bg-gray-800 p-3 rounded-lg">
              <p className="text-sm text-gray-400">Cart Items</p>
              <p className="text-2xl font-bold">{cart.length}</p>
            </div>
          </div>
        )}
      </div>

      <div className="flex-1 overflow-auto">
        {/* The Outlet component renders the matched child route component */}
        <Outlet context={outletContext} />
      </div>
    </div>
  );
};

export default Layout;