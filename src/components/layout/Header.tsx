import { ShoppingCartIcon, UserIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { Button } from '../common/Button';

export const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex-shrink-0">
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                Zētheon
              </span>
            </a>
            <nav className="hidden md:ml-8 md:flex md:space-x-8">
              <a href="/" className="text-gray-900 hover:text-gray-700 px-3 py-2 text-sm font-medium">
                Home
              </a>
              <a href="/shop" className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                Shop
              </a>
              <a href="/pages" className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                Pages
              </a>
              <a href="/about" className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                About
              </a>
              <a href="/blog" className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                Blog
              </a>
              <a href="/contact" className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                Contact
              </a>
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
              <button className="text-gray-500 hover:text-gray-900">
                <ShoppingCartIcon className="h-6 w-6" />
                <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  0
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}; 