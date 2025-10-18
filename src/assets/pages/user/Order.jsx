import React from 'react';
import { X, ShoppingBag, Plus, Minus } from 'lucide-react';

const OrderForm = ({ cart, formData, setFormData, onRemove, onUpdateQuantity, onSubmit }) => {
  const totalAmount = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="p-8 max-w-7xl mx-auto bg-slate-100 min-h-full">
      <h2 className="text-4xl font-bold text-gray-800 mb-8">Review Your Order</h2>

      <div className="grid lg:grid-cols-5 gap-8">
        {/* Order Summary */}
        <div className="lg:col-span-3 bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-2xl font-bold mb-6">Your Order</h3>
          
          {cart.length === 0 ? (
            <div className="text-center py-16 text-gray-500">
              <ShoppingBag size={48} className="mx-auto mb-4" />
              <p className="text-xl">Your cart is empty.</p>
            </div>
          ) : (
            <>
              <div className="space-y-4">
                {cart.map(item => (
                  <div key={item.id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                    <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-md" />
                    <div className="flex-1">
                      <h4 className="font-bold text-lg">{item.name}</h4>
                      <p className="text-gray-600 text-lg font-semibold">₱{item.price.toLocaleString()}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <button 
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition-colors"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="px-4 font-bold text-lg">{item.quantity}</span>
                        <button 
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition-colors"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                    </div>
                    <button 
                      onClick={() => onRemove(item.id)}
                      className="text-red-500 hover:text-red-700 p-2 rounded-full hover:bg-red-100 transition-colors"
                    >
                      <X size={24} />
                    </button>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t-2">
                <div className="flex justify-between text-2xl font-bold">
                  <span>Total:</span>
                  <span className="text-orange-500">₱{totalAmount.toLocaleString()}</span>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Customer Information Form */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-2xl font-bold mb-6">Customer Information</h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Full Name</label>
              <input 
                type="text"
                value={formData.fullName}
                onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
                placeholder="Juan Dela Cruz"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">Email</label>
              <input 
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
                placeholder="juan@email.com"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">Phone Number</label>
              <input 
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
                placeholder="09XX XXX XXXX"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">Address</label>
              <textarea 
                value={formData.address}
                onChange={(e) => setFormData({...formData, address: e.target.value})}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
                rows="3"
                placeholder="Complete address"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">Payment Method</label>
              <select 
                value={formData.paymentMethod}
                onChange={(e) => setFormData({...formData, paymentMethod: e.target.value})}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 outline-none bg-white"
              >
                <option value="installment">Installment</option>
                <option value="cash">Cash</option>
                <option value="bank">Bank Financing</option>
              </select>
            </div>

            <button 
              onClick={onSubmit}
              disabled={cart.length === 0}
              className="w-full bg-green-600 text-white py-3 rounded-lg font-bold text-lg hover:bg-green-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed mt-4"
            >
              Submit Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderForm;