import { useState } from 'react';
import { Link } from 'react-router-dom';
import { StarIcon } from '@heroicons/react/20/solid';
import { useCartStore } from '../../store/cartStore';
import { Product } from '../../types/product';
import { formatPrice } from '../../utils/format';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = async (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigation when clicking the button
    setIsLoading(true);
    try {
      await addItem(product);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 2000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="group relative">
      <div className="h-64 w-full overflow-hidden rounded-lg bg-gray-200">
        <Link to={`/product/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover object-center group-hover:opacity-75"
          />
        </Link>
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <Link to={`/product/${product.id}`}>
              <span aria-hidden="true" className="absolute inset-0" />
              {product.name}
            </Link>
          </h3>
          <p className="mt-1 text-sm text-gray-500">{product.category}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">{formatPrice(product.price)}</p>
      </div>
      <div className="mt-2 flex items-center">
        <div className="flex items-center">
          {[0, 1, 2, 3, 4].map((rating) => (
            <StarIcon
              key={rating}
              className={`h-4 w-4 flex-shrink-0 ${
                product.rating > rating ? 'text-yellow-400' : 'text-gray-200'
              }`}
              aria-hidden="true"
            />
          ))}
        </div>
        <p className="ml-2 text-sm text-gray-500">{product.reviews} reviews</p>
      </div>
      <div className="mt-4">
        <button
          onClick={handleAddToCart}
          disabled={isLoading}
          className={`relative w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${
            isLoading ? 'opacity-75 cursor-not-allowed' : ''
          }`}
        >
          {isLoading ? (
            <span className="flex items-center justify-center">
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Adding...
            </span>
          ) : showSuccess ? (
            'Added to Cart!'
          ) : (
            'Add to Cart'
          )}
        </button>
      </div>
    </div>
  );
} 