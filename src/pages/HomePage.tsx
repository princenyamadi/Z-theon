import { useState, useEffect } from 'react';
import { FeaturedProduct } from '../components/products/FeaturedProduct';
import { CategoryGrid } from '../components/categories/CategoryGrid';
import ProductCard from '../components/ProductCard';
import { categories, products, featuredProduct } from '../data/mockData';

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Featured Product Section */}
      <section className="mb-12">
        <FeaturedProduct product={featuredProduct} />
      </section>

      {/* Categories Section */}
      <section className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Browse by Category</h2>
          <div className="flex space-x-2">
            <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
              ←
            </button>
            <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
              →
            </button>
          </div>
        </div>
        <CategoryGrid categories={categories} />
      </section>

      {/* Products Section */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Explore Our Products</h2>
          <button className="text-primary hover:text-primary/80 font-medium">
            View All
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
} 