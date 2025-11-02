import React, { useState } from "react";
import {
  ShoppingCart,
  X,
  User,
  Mail,
  Phone,
  MapPin,
  CreditCard,
} from "lucide-react";
import PrimaryButton from "../../components/ui/primarybutton";

const OrderForm = ({ cart, onRemove, onUpdateQuantity, onSubmit }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    paymentMethod: "installment",
  });

  const totalAmount = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleSubmit = () => {
    if (cart.length === 0) {
      alert("Cart is empty!");
      return;
    }
    if (
      !formData.fullName ||
      !formData.email ||
      !formData.phone ||
      !formData.address
    ) {
      alert("Please fill in all fields!");
      return;
    }
    onSubmit(formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-900 via-pink-800 to-rose-900 py-16 px-6 text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-extrabold mb-12 text-center">
          Complete Your <span className="text-pink-400">Order</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* 🛒 CART SUMMARY */}
          <div className="bg-white/10 backdrop-blur-lg p-10 rounded-2xl shadow-2xl hover:bg-white/15 transition-all">
            <h3 className="text-3xl font-bold mb-8 flex items-center gap-3 text-pink-300">
              <ShoppingCart />
              Your Cart
            </h3>

            {cart.length === 0 ? (
              <div className="text-center py-20">
                <ShoppingCart
                  size={64}
                  className="mx-auto text-gray-500 mb-4"
                />
                <p className="text-lg text-gray-400">Your cart is empty</p>
              </div>
            ) : (
              <>
                <div className="space-y-6 mb-6">
                  {cart.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center gap-4 bg-white/5 rounded-xl p-5 hover:bg-white/10 transition-all"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-24 h-24 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h4 className="font-bold text-lg">{item.name}</h4>
                        <p className="text-pink-400 font-semibold text-lg">
                          ₱{item.price.toLocaleString()}
                        </p>
                        <div className="flex items-center gap-3 mt-3">
                          <button
                            onClick={() =>
                              onUpdateQuantity(item.id, item.quantity - 1)
                            }
                            className="bg-gray-700 px-3 py-1 rounded-lg hover:bg-gray-600 font-bold"
                          >
                            -
                          </button>
                          <span className="px-4 font-semibold text-lg">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              onUpdateQuantity(item.id, item.quantity + 1)
                            }
                            className="bg-gray-700 px-3 py-1 rounded-lg hover:bg-gray-600 font-bold"
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <button
                        onClick={() => onRemove(item.id)}
                        className="text-red-400 hover:text-red-600 p-2 hover:bg-red-900/30 rounded-lg transition-all"
                      >
                        <X size={24} />
                      </button>
                    </div>
                  ))}
                </div>

                <div className="border-t border-gray-700 pt-6">
                  <div className="flex justify-between items-center text-3xl font-bold">
                    <span>Total:</span>
                    <span className="text-pink-400">
                      ₱{totalAmount.toLocaleString()}
                    </span>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* 🧾 CUSTOMER INFORMATION */}
          <div className="bg-white/10 backdrop-blur-lg p-10 rounded-2xl shadow-2xl hover:bg-white/15 transition-all">
            <h3 className="text-3xl font-bold mb-8 text-pink-300">
              Customer Information
            </h3>

            <div className="space-y-5">
              {[
                {
                  label: "Full Name",
                  icon: <User className="text-pink-400" />,
                  type: "text",
                  key: "fullName",
                  placeholder: "Juan Dela Cruz",
                },
                {
                  label: "Email",
                  icon: <Mail className="text-pink-400" />,
                  type: "email",
                  key: "email",
                  placeholder: "juan@email.com",
                },
                {
                  label: "Phone Number",
                  icon: <Phone className="text-pink-400" />,
                  type: "tel",
                  key: "phone",
                  placeholder: "09XX XXX XXXX",
                },
              ].map((input) => (
                <div key={input.key}>
                  <label className="block text-gray-300 font-semibold mb-2">
                    {input.label}
                  </label>
                  <div className="flex items-center bg-white/5 border border-gray-700 rounded-lg px-4 py-3 focus-within:ring-2 focus-within:ring-pink-500 transition-all">
                    {input.icon}
                    <input
                      type={input.type}
                      value={formData[input.key]}
                      onChange={(e) =>
                        setFormData({ ...formData, [input.key]: e.target.value })
                      }
                      placeholder={input.placeholder}
                      className="w-full bg-transparent outline-none ml-3 text-lg"
                    />
                  </div>
                </div>
              ))}

              {/* Address */}
              <div>
                <label className="block text-gray-300 font-semibold mb-2">
                  Complete Address
                </label>
                <div className="flex items-start bg-white/5 border border-gray-700 rounded-lg px-4 py-3 focus-within:ring-2 focus-within:ring-pink-500 transition-all">
                  <MapPin className="text-pink-400 mt-1" />
                  <textarea
                    value={formData.address}
                    onChange={(e) =>
                      setFormData({ ...formData, address: e.target.value })
                    }
                    rows="3"
                    placeholder="Street, Barangay, City, Province"
                    className="w-full bg-transparent outline-none ml-3 text-lg resize-none"
                  />
                </div>
              </div>

              {/* Payment Method */}
              <div>
                <label className="block text-gray-300 font-semibold mb-2">
                  Payment Method
                </label>
                <div className="flex items-center bg-white/5 border border-gray-700 rounded-lg px-4 py-3">
                  <CreditCard className="text-pink-400" />
                  <select
                    value={formData.paymentMethod}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        paymentMethod: e.target.value,
                      })
                    }
                    className="w-full bg-transparent outline-none ml-3 text-lg appearance-none"
                  >
                    <option value="installment" className="bg-gray-900">
                      Installment Plan
                    </option>
                    <option value="cash" className="bg-gray-900">
                      Cash Payment
                    </option>
                    <option value="bank" className="bg-gray-900">
                      Bank Financing
                    </option>
                  </select>
                </div>
              </div>

              <PrimaryButton
                onClick={handleSubmit}
                disabled={cart.length === 0}
                className="w-full bg-pink-500 hover:bg-pink-600 text-xl py-4 mt-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
              >
                Submit Order
              </PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderForm;
