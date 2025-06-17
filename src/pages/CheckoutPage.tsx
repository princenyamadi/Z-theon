import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCartStore } from '../store/cartStore';
import { formatPrice } from '../utils/format';
import LoadingSpinner from '../components/common/LoadingSpinner';

type CheckoutStep = 'cart' | 'shipping' | 'payment' | 'confirmation';

export default function CheckoutPage() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState<CheckoutStep>('cart');
  const [isLoading, setIsLoading] = useState(false);
  const { items, totalItems, totalPrice, removeItem, updateQuantity } = useCartStore();

  const handleQuantityChange = (productId: string, newQuantity: number) => {
    if (newQuantity < 1) {
      removeItem(productId);
    } else {
      updateQuantity(productId, newQuantity);
    }
  };

  const handleProceedToShipping = () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setCurrentStep('shipping');
    }, 1000);
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Your cart is empty
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Add some items to your cart to start the checkout process.
            </p>
            <div className="mt-6">
              <button
                onClick={() => navigate('/')}
                className="inline-flex items-center rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Progress Steps */}
        <nav aria-label="Progress" className="mb-8">
          <ol role="list" className="flex items-center">
            {['cart', 'shipping', 'payment', 'confirmation'].map((step, index) => (
              <li key={step} className={`relative ${index !== 3 ? 'pr-8 sm:pr-20' : ''}`}>
                <div className="flex items-center">
                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-full ${
                      currentStep === step
                        ? 'border-2 border-indigo-600 bg-indigo-600'
                        : currentStep === 'confirmation' && step === 'payment'
                        ? 'border-2 border-indigo-600 bg-indigo-600'
                        : 'border-2 border-gray-300'
                    }`}
                  >
                    <span
                      className={`text-sm font-medium ${
                        currentStep === step || (currentStep === 'confirmation' && step === 'payment')
                          ? 'text-white'
                          : 'text-gray-500'
                      }`}
                    >
                      {index + 1}
                    </span>
                  </div>
                  {index !== 3 && (
                    <div
                      className={`absolute top-4 left-8 -ml-px h-0.5 w-full ${
                        currentStep === 'shipping' && step === 'cart'
                          ? 'bg-indigo-600'
                          : currentStep === 'payment' && (step === 'cart' || step === 'shipping')
                          ? 'bg-indigo-600'
                          : currentStep === 'confirmation'
                          ? 'bg-indigo-600'
                          : 'bg-gray-300'
                      }`}
                    />
                  )}
                </div>
                <div className="mt-2">
                  <span className="text-sm font-medium text-gray-900">
                    {step.charAt(0).toUpperCase() + step.slice(1)}
                  </span>
                </div>
              </li>
            ))}
          </ol>
        </nav>

        {/* Cart Review Step */}
        {currentStep === 'cart' && (
          <div className="lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start">
            <div className="lg:col-span-7">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">Shopping Cart</h2>
              <div className="mt-8">
                <div className="flow-root">
                  <ul role="list" className="-my-6 divide-y divide-gray-200">
                    {items.map((item) => (
                      <li key={item.id} className="flex py-6">
                        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>

                        <div className="ml-4 flex flex-1 flex-col">
                          <div>
                            <div className="flex justify-between text-base font-medium text-gray-900">
                              <h3>{item.name}</h3>
                              <p className="ml-4">{formatPrice(item.price * item.quantity)}</p>
                            </div>
                            <p className="mt-1 text-sm text-gray-500">{item.category}</p>
                          </div>
                          <div className="flex flex-1 items-end justify-between text-sm">
                            <div className="flex items-center space-x-2">
                              <button
                                onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                                className="text-gray-500 hover:text-gray-700"
                              >
                                -
                              </button>
                              <span className="text-gray-500">Qty {item.quantity}</span>
                              <button
                                onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                                className="text-gray-500 hover:text-gray-700"
                              >
                                +
                              </button>
                            </div>

                            <button
                              type="button"
                              onClick={() => removeItem(item.id)}
                              className="font-medium text-indigo-600 hover:text-indigo-500"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
              <h2 className="text-lg font-medium text-gray-900">Order summary</h2>
              <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-600">Subtotal</div>
                  <div className="text-sm font-medium text-gray-900">{formatPrice(totalPrice)}</div>
                </div>
                <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                  <div className="text-base font-medium text-gray-900">Order total</div>
                  <div className="text-base font-medium text-gray-900">{formatPrice(totalPrice)}</div>
                </div>
              </div>

              <div className="mt-6">
                <button
                  onClick={handleProceedToShipping}
                  disabled={isLoading}
                  className={`w-full rounded-md border border-transparent bg-indigo-600 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 ${
                    isLoading ? 'opacity-75 cursor-not-allowed' : ''
                  }`}
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center">
                      <LoadingSpinner size="sm" className="mr-2" />
                      Processing...
                    </span>
                  ) : (
                    'Proceed to Shipping'
                  )}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Shipping Step */}
        {currentStep === 'shipping' && (
          <div className="mx-auto max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Shipping Information</h2>
            <p className="mt-2 text-sm text-gray-500">
              Please provide your shipping details to continue.
            </p>
            {/* Shipping form will be added in the next step */}
          </div>
        )}

        {/* Payment Step */}
        {currentStep === 'payment' && (
          <div className="mx-auto max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Payment Information</h2>
            <p className="mt-2 text-sm text-gray-500">
              Please provide your payment details to complete the order.
            </p>
            {/* Payment form will be added in the next step */}
          </div>
        )}

        {/* Confirmation Step */}
        {currentStep === 'confirmation' && (
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Order Confirmed!</h2>
            <p className="mt-2 text-sm text-gray-500">
              Thank you for your order. We'll send you a confirmation email shortly.
            </p>
            {/* Order details will be added in the next step */}
          </div>
        )}
      </div>
    </div>
  );
} 