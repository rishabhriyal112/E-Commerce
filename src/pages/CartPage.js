import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

function CartPage() {
  const { items, totalItems, totalPrice, updateQuantity, removeItem, clearCart } = useCart();
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const handleQuantityChange = (product, newQuantity) => {
    if (newQuantity < 1) return;
    if (newQuantity > product.stock) return;
    updateQuantity(product.id, newQuantity);
  };

  const handleRemoveItem = (product) => {
    // Confirm before removing
    if (window.confirm(`Remove ${product.name} from cart?`)) {
      // Remove with one call (removing all quantities)
      for (let i = 0; i < product.quantity; i++) {
        removeItem(product);
      }
    }
  };

  const handleCheckout = () => {
    if (!currentUser) {
      // If user is not logged in, redirect to login
      if (window.confirm('You need to be logged in to checkout. Go to login page?')) {
        navigate('/login');
      }
    } else {
      // User is logged in, proceed to checkout
      navigate('/checkout');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Your Shopping Cart</h1>

      {totalItems === 0 ? (
        <div className="text-center py-12 bg-white rounded-lg shadow-md">
          <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
          <h2 className="text-xl font-semibold mb-2">Your cart is empty</h2>
          <p className="text-gray-600 mb-6">Looks like you haven't added any products to your cart yet.</p>
          <Link to="/products" className="btn btn-primary">
            Start Shopping
          </Link>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row lg:space-x-8">
          {/* Cart Items */}
          <div className="lg:w-8/12">
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
              <table className="w-full">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider sr-only">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {items.map((item) => (
                    <tr key={item.id} className="hover:bg-gray-50">
                      {/* Product */}
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md">
                            <img
                              src={item.images[0]}
                              alt={item.name}
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                          <div className="ml-4">
                            <Link to={`/products/${item.id}`} className="text-sm font-medium text-gray-900 hover:text-primary">
                              {item.name}
                            </Link>
                            <p className="text-sm text-gray-500">{item.brand}</p>
                          </div>
                        </div>
                      </td>
                      
                      {/* Price */}
                      <td className="px-6 py-4 whitespace-nowrap">
                        {item.discountPrice ? (
                          <div>
                            <span className="text-sm font-medium text-gray-900">${item.discountPrice.toFixed(2)}</span>
                            <span className="text-xs text-gray-500 line-through ml-1">${item.price.toFixed(2)}</span>
                          </div>
                        ) : (
                          <span className="text-sm font-medium text-gray-900">${item.price.toFixed(2)}</span>
                        )}
                      </td>
                      
                      {/* Quantity */}
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <button
                            onClick={() => handleQuantityChange(item, item.quantity - 1)}
                            className="border rounded-l p-1 hover:bg-gray-100"
                          >
                            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
                            </svg>
                          </button>
                          <input
                            type="number"
                            min="1"
                            max={item.stock}
                            value={item.quantity}
                            onChange={(e) => handleQuantityChange(item, parseInt(e.target.value))}
                            className="w-12 border-t border-b text-center py-1"
                          />
                          <button
                            onClick={() => handleQuantityChange(item, item.quantity + 1)}
                            className="border rounded-r p-1 hover:bg-gray-100"
                          >
                            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                            </svg>
                          </button>
                        </div>
                      </td>
                      
                      {/* Total */}
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        ${((item.discountPrice || item.price) * item.quantity).toFixed(2)}
                      </td>
                      
                      {/* Actions */}
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button
                          onClick={() => handleRemoveItem(item)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Cart Actions */}
            <div className="flex justify-between items-center mb-8">
              <Link to="/products" className="text-primary hover:text-primary-dark flex items-center">
                <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Continue Shopping
              </Link>
              <button
                onClick={() => {
                  if (window.confirm('Are you sure you want to clear your cart?')) {
                    clearCart();
                  }
                }}
                className="text-red-500 hover:text-red-700 flex items-center"
              >
                <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
                Clear Cart
              </button>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:w-4/12">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
              
              <div className="border-t border-b py-4 mb-4">
                {/* Order details */}
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Subtotal ({totalItems} items)</span>
                  <span className="font-medium">${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium">Free</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Tax</span>
                  <span className="font-medium">${(totalPrice * 0.07).toFixed(2)}</span>
                </div>
              </div>
              
              {/* Total */}
              <div className="flex justify-between items-center mb-6">
                <span className="text-lg font-semibold">Total</span>
                <span className="text-xl font-bold text-primary-dark">
                  ${(totalPrice + (totalPrice * 0.07)).toFixed(2)}
                </span>
              </div>
              
              {/* Checkout Button */}
              <button
                onClick={handleCheckout}
                className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-4 rounded-md"
              >
                Proceed to Checkout
              </button>
              
              {/* Payment methods */}
              <div className="mt-6">
                <p className="text-xs text-gray-500 mb-2">We accept:</p>
                <div className="flex space-x-2">
                  <div className="border rounded px-2 py-1">
                    <span className="text-sm">Visa</span>
                  </div>
                  <div className="border rounded px-2 py-1">
                    <span className="text-sm">Mastercard</span>
                  </div>
                  <div className="border rounded px-2 py-1">
                    <span className="text-sm">PayPal</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPage; 
