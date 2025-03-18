import React from 'react';
import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center text-center">
      <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-6">Page Not Found</h2>
      <p className="text-gray-600 max-w-md mb-8">
        We're sorry, the page you requested could not be found. Please check the URL or go back to the homepage.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link to="/" className="btn btn-primary">
          Return to Home
        </Link>
        <Link to="/products" className="btn btn-secondary">
          Browse Products
        </Link>
      </div>
    </div>
  );
}

export default NotFoundPage; 
