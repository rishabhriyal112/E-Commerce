import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function ProductCard({ product }) {
  const { addItem, isInCart } = useCart();
  
  const handleAddToCart = (e) => {
    e.preventDefault();
    addItem(product, 1);
  };
  
  // Calculate discount percentage if there's a discount price
  const discountPercentage = product.discountPrice
    ? Math.round(((product.price - product.discountPrice) / product.price) * 100)
    : 0;

  return (
    <Link to={`/products/${product.id}`} className="group">
      <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
        {/* Product Image */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          
          {/* Badges */}
          <div className="absolute top-2 left-2 flex flex-col gap-1">
            {product.isNew && (
              <span className="bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded-md">
                New
              </span>
            )}
            {discountPercentage > 0 && (
              <span className="bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-md">
                {discountPercentage}% OFF
              </span>
            )}
          </div>
        </div>
        
        {/* Product Info */}
        <div className="p-4">
          <div className="flex items-center justify-between mb-1">
            <p className="text-xs text-gray-500">{product.brand}</p>
            <div className="flex items-center">
              <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-xs text-gray-500 ml-1">{product.rating.toFixed(1)}</span>
            </div>
          </div>
          
          <h3 className="text-sm font-medium text-gray-900 mb-1 line-clamp-2">
            {product.name}
          </h3>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              {product.discountPrice ? (
                <>
                  <span className="text-sm font-bold text-gray-900">${product.discountPrice.toFixed(2)}</span>
                  <span className="ml-2 text-xs text-gray-500 line-through">${product.price.toFixed(2)}</span>
                </>
              ) : (
                <span className="text-sm font-bold text-gray-900">${product.price.toFixed(2)}</span>
              )}
            </div>
            
            {product.stockAvailable > 0 ? (
              <button
                onClick={handleAddToCart}
                className={`p-1 rounded-full ${
                  isInCart(product.id)
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-primary hover:text-white'
                } transition-colors duration-200`}
                aria-label="Add to cart"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isInCart(product.id) ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  )}
                </svg>
              </button>
            ) : (
              <span className="text-xs text-red-500 font-medium">Out of Stock</span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard; 
