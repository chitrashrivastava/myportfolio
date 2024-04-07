import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="not-found">
      <div className="container mx-auto text-center py-24">
        <h1 className="text-5xl font-bold mb-4">404 - Not Found</h1>
        <p className="text-gray-600 text-lg mb-8">
          Oops! The page you are looking for might be in another galaxy.
        </p>
        <img
          src="https://example.com/your-image-path/404-image.png"
          alt="404 Not Found"
          className="mx-auto mb-8"
        />
        <p className="text-gray-600 text-lg mb-8">
          Let's get you back{' '}
          
          .
        </p>
      </div>
    </div>
  );
};

export default NotFound;