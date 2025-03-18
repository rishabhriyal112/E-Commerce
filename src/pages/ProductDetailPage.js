import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';

function ProductDetailPage() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { addItem } = useCart();
  
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    // In a real app, you'd fetch from an API
    // Here we simulate a slight delay and use our data file
    const timer = setTimeout(() => {
      const foundProduct = products.find(p => p.id === parseInt(productId));
      
      if (foundProduct) {
        setProduct(foundProduct);
        
        // Find related products (same category, different product)
        const related = products
          .filter(p => p.category === foundProduct.category && p.id !== foundProduct.id)
          .slice(0, 4);
        
        setRelatedProducts(related);
      }
      
      setLoading(false);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [productId]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8 flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
        <p className="mb-6">Sorry, the product you're looking for doesn't exist.</p>
        <Link to="/products" className="btn btn-primary">
          Return to Products
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    // Add to cart multiple times based on quantity
    for (let i = 0; i < quantity; i++) {
      addItem(product);
    }
  };

  const incrementQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="text-sm mb-6">
        <ol className="flex items-center space-x-1">
          <li>
            <Link to="/" className="text-gray-500 hover:text-primary">Home</Link>
          </li>
          <li className="text-gray-500">/</li>
          <li>
            <Link to="/products" className="text-gray-500 hover:text-primary">Products</Link>
          </li>
          <li className="text-gray-500">/</li>
          <li>
            <Link to={`/products?category=${product.category}`} className="text-gray-500 hover:text-primary">
              {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
            </Link>
          </li>
          <li className="text-gray-500">/</li>
          <li className="text-gray-800 font-medium truncate">{product.name}</li>
        </ol>
      </nav>

      {/* Product Details */}
      <div className="flex flex-col md:flex-row -mx-4">
        {/* Product Images */}
        <div className="md:w-1/2 px-4 mb-8 md:mb-0">
          <div className="mb-4 overflow-hidden rounded-lg">
            <img 
              src={product.images[selectedImage]} 
              alt={product.name}
              className="w-full h-96 object-cover object-center"
            />
          </div>
          
          {/* Thumbnails */}
          <div className="flex space-x-2">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`w-20 h-20 overflow-hidden rounded-md ${
                  selectedImage === index ? 'ring-2 ring-primary' : 'border border-gray-300'
                }`}
              >
                <img 
                  src={image} 
                  alt={`${product.name} thumbnail ${index + 1}`}
                  className="w-full h-full object-cover object-center"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="md:w-1/2 px-4">
          <div className="flex flex-col h-full">
            <div>
              <span className="text-gray-500 uppercase tracking-wide text-sm">{product.brand}</span>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
              
              {/* Rating */}
              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i} 
                      className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-gray-500 ml-2">{product.rating} ({product.reviewCount} reviews)</span>
              </div>
              
              {/* Price */}
              <div className="mb-6">
                {product.discountPrice ? (
                  <div className="flex items-center">
                    <span className="text-3xl font-bold text-primary-dark">${product.discountPrice.toFixed(2)}</span>
                    <span className="text-lg text-gray-500 line-through ml-2">${product.price.toFixed(2)}</span>
                    <span className="ml-2 bg-secondary text-white text-sm font-semibold px-2 py-1 rounded">
                      {Math.round(((product.price - product.discountPrice) / product.price) * 100)}% OFF
                    </span>
                  </div>
                ) : (
                  <span className="text-3xl font-bold text-primary-dark">${product.price.toFixed(2)}</span>
                )}
              </div>
                
              {/* Description */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Description</h3>
                <p className="text-gray-700">{product.description}</p>
              </div>
              
              {/* Features */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Key Features</h3>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
              
              {/* Stock Status */}
              <div className="mb-6">
                <span className={`${
                  product.stock > 10 
                    ? 'bg-green-100 text-green-800' 
                    : product.stock > 0 
                      ? 'bg-yellow-100 text-yellow-800' 
                      : 'bg-red-100 text-red-800'
                } px-2 py-1 rounded text-sm font-medium`}>
                  {product.stock > 10 
                    ? 'In Stock' 
                    : product.stock > 0 
                      ? `Only ${product.stock} left in stock` 
                      : 'Out of Stock'}
                </span>
              </div>
            </div>
              
            {/* Add to Cart */}
            <div className="mt-auto">
              <div className="flex items-center mb-6">
                <label htmlFor="quantity" className="text-gray-700 mr-4">Quantity:</label>
                <div className="flex items-center">
                  <button 
                    onClick={decrementQuantity}
                    disabled={quantity <= 1}
                    className="bg-gray-200 hover:bg-gray-300 text-gray-700 w-8 h-8 rounded-l flex items-center justify-center"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
                    </svg>
                  </button>
                  <input 
                    type="number" 
                    id="quantity" 
                    value={quantity} 
                    onChange={(e) => {
                      const val = parseInt(e.target.value);
                      if (!isNaN(val) && val >= 1 && val <= product.stock) {
                        setQuantity(val);
                      }
                    }} 
                    min="1" 
                    max={product.stock}
                    className="w-12 h-8 border-gray-200 border-t border-b text-center"
                  />
                  <button 
                    onClick={incrementQuantity}
                    disabled={quantity >= product.stock}
                    className="bg-gray-200 hover:bg-gray-300 text-gray-700 w-8 h-8 rounded-r flex items-center justify-center"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <button
                  onClick={handleAddToCart}
                  disabled={product.stock === 0}
                  className={`flex-1 bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-4 rounded-md flex items-center justify-center ${
                    product.stock === 0 ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  Add to Cart
                </button>
                
                <button
                  onClick={() => {
                    handleAddToCart();
                    navigate('/cart');
                  }}
                  disabled={product.stock === 0}
                  className={`flex-1 bg-secondary hover:bg-secondary-dark text-white font-semibold py-3 px-4 rounded-md ${
                    product.stock === 0 ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {relatedProducts.map(relatedProduct => (
              <Link 
                key={relatedProduct.id} 
                to={`/products/${relatedProduct.id}`}
                className="card group transition-all duration-300 hover:shadow-lg"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={relatedProduct.images[0]} 
                    alt={relatedProduct.name} 
                    className="w-full h-48 object-cover object-center transform group-hover:scale-105 transition-transform duration-300"
                  />
                  {relatedProduct.discountPrice && (
                    <div className="absolute top-2 left-2 bg-secondary text-white text-xs font-semibold px-2 py-1 rounded">
                      {Math.round(((relatedProduct.price - relatedProduct.discountPrice) / relatedProduct.price) * 100)}% OFF
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <p className="text-xs text-gray-500 mb-1">{relatedProduct.brand}</p>
                  <h3 className="text-sm font-medium text-gray-800 line-clamp-2">
                    {relatedProduct.name}
                  </h3>
                  <div className="mt-2 flex items-center">
                    {relatedProduct.discountPrice ? (
                      <>
                        <span className="text-primary-dark font-semibold">${relatedProduct.discountPrice.toFixed(2)}</span>
                        <span className="text-gray-500 text-sm line-through ml-2">${relatedProduct.price.toFixed(2)}</span>
                      </>
                    ) : (
                      <span className="text-primary-dark font-semibold">${relatedProduct.price.toFixed(2)}</span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

export default ProductDetailPage;
