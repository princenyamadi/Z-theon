import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { StarIcon } from '@heroicons/react/20/solid';
import { useCartStore } from '../../store/cartStore';
import { products } from '../../data/mockData';
import { formatPrice } from '../../utils/format';

export default function ProductDetail() {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const addItem = useCartStore((state) => state.addItem);

  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Product Not Found
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              The product you're looking for doesn't exist or has been removed.
            </p>
            <div className="mt-6">
              <Link
                to="/"
                className="inline-flex items-center rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Return to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const handleAddToCart = async () => {
    setIsLoading(true);
    try {
      await addItem(product, quantity);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 2000);
    } finally {
      setIsLoading(false);
    }
  };

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8">
          {/* Image gallery */}
          <div className="lg:max-w-lg lg:self-stretch">
            <div className="h-full overflow-hidden rounded-lg">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>

          {/* Product info */}
          <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">{product.name}</h1>
            
            <div className="mt-3">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl tracking-tight text-gray-900">{formatPrice(product.price)}</p>
            </div>

            {/* Reviews */}
            <div className="mt-3">
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={`h-5 w-5 flex-shrink-0 ${
                        product.rating > rating ? 'text-yellow-400' : 'text-gray-200'
                      }`}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="ml-3 text-sm text-gray-500">
                  {product.reviews} reviews
                </p>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="sr-only">Description</h3>
              <div className="space-y-6 text-base text-gray-700">{product.description}</div>
            </div>

            <div className="mt-6">
              <div className="flex items-center">
                <h3 className="text-sm font-medium text-gray-900">Category:</h3>
                <p className="ml-2 text-sm text-gray-500">{product.category}</p>
              </div>
            </div>

            <div className="mt-6">
              <div className="flex items-center">
                <label htmlFor="quantity" className="text-sm font-medium text-gray-900">
                  Quantity
                </label>
                <select
                  id="quantity"
                  name="quantity"
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="ml-4 rounded-md border-gray-300 py-1.5 text-base leading-5 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-6">
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

            {/* Product highlights */}
            <div className="mt-8 border-t border-gray-200 pt-8">
              <h2 className="text-sm font-medium text-gray-900">Highlights</h2>
              <div className="mt-4">
                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                  <li className="text-gray-400">
                    <span className="text-gray-600">Premium quality materials</span>
                  </li>
                  <li className="text-gray-400">
                    <span className="text-gray-600">Fast shipping available</span>
                  </li>
                  <li className="text-gray-400">
                    <span className="text-gray-600">30-day return policy</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Related Products</h2>
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {relatedProducts.map((relatedProduct) => (
              <div key={relatedProduct.id} className="group relative">
                <div className="h-64 w-full overflow-hidden rounded-lg bg-gray-200">
                  <Link to={`/product/${relatedProduct.id}`}>
                    <img
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      className="h-full w-full object-cover object-center group-hover:opacity-75"
                    />
                  </Link>
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <Link to={`/product/${relatedProduct.id}`}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {relatedProduct.name}
                      </Link>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{relatedProduct.category}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    {formatPrice(relatedProduct.price)}
                  </p>
                </div>
                <div className="mt-2 flex items-center">
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        className={`h-4 w-4 flex-shrink-0 ${
                          relatedProduct.rating > rating ? 'text-yellow-400' : 'text-gray-200'
                        }`}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="ml-2 text-sm text-gray-500">{relatedProduct.reviews} reviews</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 