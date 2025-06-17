import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartIcon, UserIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useCartStore } from '../store/cartStore';
import CartDrawer from './CartDrawer';

export default function Header() {
  const [cartOpen, setCartOpen] = useState(false);
  const { totalItems } = useCartStore();

  const handleCartClick = () => {
    setCartOpen(true);
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                Zētheon
              </span>
            </Link>
            <nav className="hidden md:ml-8 md:flex md:space-x-8">
              <Link to="/" className="text-gray-900 hover:text-gray-700 px-3 py-2 text-sm font-medium">
                Home
              </Link>
              <Link to="/shop" className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                Shop
              </Link>
              <Link to="/pages" className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                Pages
              </Link>
              <Link to="/about" className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                About
              </Link>
              <Link to="/blog" className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                Blog
              </Link>
              <Link to="/contact" className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                Contact
              </Link>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-gray-500 hover:text-gray-900">
              <MagnifyingGlassIcon className="h-6 w-6" />
            </button>
            <button className="text-gray-500 hover:text-gray-900">
              <UserIcon className="h-6 w-6" />
            </button>
            <div className="relative">
              <button 
                className="text-gray-500 hover:text-gray-900"
                onClick={handleCartClick}
              >
                <ShoppingCartIcon className="h-6 w-6" />
                <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  {totalItems}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </header>
  );
} 