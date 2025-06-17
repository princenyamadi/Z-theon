import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { useCartStore } from '../store/cartStore';
import { StarIcon } from '@heroicons/react/20/solid';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCartStore();
  const [isAdding, setIsAdding] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleAddToCart = async (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigation when clicking the button
    setIsAdding(true);
    try {
      addItem(product);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 2000);
    } finally {
      setIsAdding(false);
    }
  };

  return (
    <div className="group relative">
      <Link to={`/product/${product.id}`} className="block">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
          />
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
              <span aria-hidden="true" className="absolute inset-0" />
              {product.name}
            </h3>
            <div className="mt-1 flex items-center">
              <div className="flex items-center">
                {[0, 1, 2, 3, 4].map((rating) => (
                  <StarIcon
                    key={rating}
                    className={`${
                      rating < product.rating
                        ? 'text-yellow-400'
                        : 'text-gray-200'
                    } h-4 w-4 flex-shrink-0`}
                    aria-hidden="true"
                  />
                ))}
              </div>
              <p className="ml-2 text-sm text-gray-500">
                ({product.reviews} reviews)
              </p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm font-medium text-gray-900">${product.price}</p>
            <button
              onClick={handleAddToCart}
              disabled={isAdding}
              className={`mt-2 text-sm font-medium ${
                showSuccess
                  ? 'text-green-600'
                  : 'text-indigo-600 hover:text-indigo-500'
              } ${isAdding ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {showSuccess ? 'Added to cart!' : isAdding ? 'Adding...' : 'Add to cart'}
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
} 