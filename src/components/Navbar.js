import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

function Navbar() {
  const { currentUser } = useAuth();
  const { totalItems } = useCart();
  const location = useLocation();
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Handle scrolling effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Close mobile menu when navigation occurs
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);
  
  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-white/95'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-primary">ShopEase</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary font-medium">
              Home
            </Link>
            <Link to="/products" className="text-gray-700 hover:text-primary font-medium">
              Products
            </Link>
            <Link to="/cart" className="text-gray-700 hover:text-primary font-medium relative">
              Cart
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-white text-xs font-medium rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
            {currentUser ? (
              <Link to="/profile" className="text-gray-700 hover:text-primary font-medium">
                My Account
              </Link>
            ) : (
              <Link to="/login" className="text-gray-700 hover:text-primary font-medium">
                Sign In
              </Link>
            )}
            <Link
              to={currentUser ? "/checkout" : "/login"}
              className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-md font-medium transition duration-300"
            >
              {currentUser ? "Checkout" : "Register"}
            </Link>
          </nav>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-500 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-3">
              <Link to="/" className="text-gray-700 hover:text-primary font-medium py-2">
                Home
              </Link>
              <Link to="/products" className="text-gray-700 hover:text-primary font-medium py-2">
                Products
              </Link>
              <Link to="/cart" className="text-gray-700 hover:text-primary font-medium py-2 flex items-center">
                Cart
                {totalItems > 0 && (
                  <span className="ml-2 bg-primary text-white text-xs font-medium rounded-full w-5 h-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </Link>
              {currentUser ? (
                <Link to="/profile" className="text-gray-700 hover:text-primary font-medium py-2">
                  My Account
                </Link>
              ) : (
                <Link to="/login" className="text-gray-700 hover:text-primary font-medium py-2">
                  Sign In
                </Link>
              )}
              <Link
                to={currentUser ? "/checkout" : "/register"}
                className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-md font-medium transition duration-300 inline-block"
              >
                {currentUser ? "Checkout" : "Register"}
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;
