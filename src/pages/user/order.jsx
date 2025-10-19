import React, { useState } from 'react';
import { ShoppingCart, X } from 'lucide-react';
import Card from '../../components/ui/card';
import PrimaryButton from '../../components/ui/primarybutton';

const OrderForm = ({ cart, onRemove, onUpdateQuantity, onSubmit }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    paymentMethod: 'installment'
  });

  const totalAmount = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handleSubmit = () => {
    if (cart.length === 0) {
      alert('Cart is empty!');
      return;
    }
    if (!formData.fullName || !formData.email || !formData.phone || !formData.address) {
      alert('Please fill in all fields!');
      return;
    }
    onSubmit(formData);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-gray-800 mb-10">Order Form</h2>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Cart Summary */}
          <Card className="p-8">
            <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <ShoppingCart className="text-blue-600" />
              Your Order
            </h3>
            
            {cart.length === 0 ? (
              <div className="text-center py-16">
                <ShoppingCart size={64} className="mx-auto text-gray-300 mb-4" />
                <p className="text-xl text-gray-500">Walang laman ang cart</p>
              </div>
            ) : (
              <>
                <div className="space-y-4 mb-6">
                  {cart.map(item => (
                    <div key={item.id} className="flex items-center gap-4 p-5 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                      <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-lg" />
                      <div className="flex-1">
                        <h4 className="font-bold text-lg text-gray-800">{item.name}</h4>
                        <p className="text-blue-600 font-semibold text-lg">₱{item.price.toLocaleString()}</p>
                        <div className="flex items-center gap-3 mt-3">
                          <button 
                            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                            className="bg-gray-300 px-3 py-1 rounded-lg hover:bg-gray-400 font-bold"
                          >
                            -
                          </button>
                          <span className="px-4 font-semibold text-lg">{item.quantity}</span>
                          <button 
                            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                            className="bg-gray-300 px-3 py-1 rounded-lg hover:bg-gray-400 font-bold"
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <button 
                        onClick={() => onRemove(item.id)}
                        className="text-red-600 hover:text-red-800 p-2 hover:bg-red-50 rounded-lg"
                      >
                        <X size={24} />
                      </button>
                    </div>
                  ))}
                </div>

                <div className="border-t-2 pt-6">
                  <div className="flex justify-between items-center text-3xl font-bold">
                    <span className="text-gray-700">Total:</span>
                    <span className="text-blue-600">₱{totalAmount.toLocaleString()}</span>
                  </div>
                </div>
              </>
            )}
          </Card>

          {/* Customer Form */}
          <Card className="p-8">
            <h3 className="text-3xl font-bold mb-6">Customer Information</h3>
            
            <div className="space-y-5">
              <div>
                <label className="block text-gray-700 font-semibold mb-2 text-lg">Full Name</label>
                <input 
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-lg"
                  placeholder="Juan Dela Cruz"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2 text-lg">Email</label>
                <input 
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-lg"
                  placeholder="juan@email.com"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2 text-lg">Phone Number</label>
                <input 
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-lg"
                  placeholder="09XX XXX XXXX"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2 text-lg">Complete Address</label>
                <textarea 
                  value={formData.address}
                  onChange={(e) => setFormData({...formData, address: e.target.value})}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-lg"
                  rows="4"
                  placeholder="Street, Barangay, City, Province"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2 text-lg">Payment Method</label>
                <select 
                  value={formData.paymentMethod}
                  onChange={(e) => setFormData({...formData, paymentMethod: e.target.value})}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-lg"
                >
                  <option value="installment">Installment Plan</option>
                  <option value="cash">Cash Payment</option>
                  <option value="bank">Bank Financing</option>
                </select>
              </div>

              <PrimaryButton 
                onClick={handleSubmit}
                disabled={cart.length === 0}
                className="w-full bg-green-600 hover:bg-green-700 text-xl py-4 mt-6"
              >
                Submit Order
              </PrimaryButton>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default OrderForm;