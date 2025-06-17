import type { FeaturedProduct as IFeaturedProduct } from '../../types/index.ts';
import { Rating } from '../common/Rating.tsx';
import { Button } from '../common/Button.tsx';

interface FeaturedProductProps {
  product: IFeaturedProduct;
}

export const FeaturedProduct: React.FC<FeaturedProductProps> = ({ product }) => {
  const handleShopNow = () => {
    console.log('Shop now clicked for:', product.id);
  };

  return (
    <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-8 md:p-12">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex-1">
          <div className="inline-block bg-pink-100 text-pink-800 text-xs font-medium px-2.5 py-1 rounded-full mb-4">
            Hot Deal In This Week
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {product.name}
          </h1>
          <div className="mb-6">
            <Rating rating={product.rating} reviews={product.reviews} size="lg" />
          </div>
          <div className="mb-8">
            <span className="text-3xl font-bold text-gray-900">${product.price}</span>
          </div>
          <Button size="lg" onClick={handleShopNow}>
            Shop Now
          </Button>
        </div>
        <div className="flex-1">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto object-contain transform hover:scale-105 transition-transform duration-300 rounded-lg shadow-xl"
          />
        </div>
      </div>
    </div>
  );
}; 